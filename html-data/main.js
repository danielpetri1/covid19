var slider = document.getElementById("myRange");
var sd_factor = document.getElementById("sd_factor");
var result = document.getElementById("result_header");

//sd_factor.innerHTML = slider.value;
//result_header.innerHTML = sd_factor.innerHTML;

slider.oninput = function () {
    sd_factor.innerHTML = this.value;
    result_header.innerHTML = calcLivesSaved("Musterstadt", "1000", "100000", "0.55", this.value / 100)[0];
}

// FUNCTION TO DISPLAY OUTPUT
function square(num) {
    return num * num;
}

// ------------------- ACTIVATE FOR MAXIMUM
    //math.config({
    //number: 'BigNumber',      // Default type of number:
    //                        // 'number' (default), 'BigNumber', or 'Fraction'
    //precision: 64             // Number of significant digits for BigNumbers
    //})

    function ndsolve(f, x0, dt, tmax) { //code for ndsolve from https://mathjs.org/examples/browser/rocket_trajectory_optimization.html.html
      const n = f.size()[0]  // Number of variables
      const x = x0.clone()   // Current values of variables
      const dxdt = []        // Temporary variable to hold time-derivatives
      const result = []      // Contains entire solution

      const nsteps = math.divide(tmax, dt)   // Number of time steps
      for(let i=0; i<nsteps; i++) {
        // Compute derivatives
        for(let j=0; j<n; j++) {
          dxdt[j] = f.get([j]).apply(null, x.toArray())
        }
        // Euler method to compute next time step
        for(let j=0; j<n; j++) {
          x.set([j], math.add(x.get([j]), math.multiply(dxdt[j], dt)))
        }
        result.push(x.clone())
      }

      return math.matrix(result)
    }

    // Import the numerical ODE solver
    math.import({ndsolve:ndsolve})

    // Create a math.js context for our simulation. Everything else occurs in the context of the expression parser!

    //-------------- MUSTERINPUT ----------------
    var nameOfCity = "Musterstadt"
    var numOfCases = "1000"
    var numOfPopulation = "100000"
    var recoveryRateInRegion = "0.55" //TODO: update daily for EVERY region

    //TODO: check recoveryRateInRegion is <= 0.98 otherwise we crash

    var sdvalue = "0.5"
    //-------------- INPUT FROM USER ----------------

    function calcLivesSaved(nameOfCity, numOfCases, numOfPopulation, recoveryRateInRegion, sdvalue){ //OUR MAIN FUNCTION

      const sim = math.parser()
      var tfinal = "700" //how long the simulation keeps going... Always input an integer in string representation here!!

      console.log(sim.evaluate("estimatedRecovered = " + recoveryRateInRegion + " * " + numOfCases).toString()) //TODO: remove console.log / toString wrapper
      console.log(sim.evaluate("estimatedDead = 0.02 * " + numOfCases).toString())

      console.log(sim.evaluate("estimatedRemoved = estimatedRecovered + estimatedDead").toString())
      console.log(sim.evaluate("infectedPercentage = 1 - 0.02 - " + recoveryRateInRegion).toString())
      console.log(sim.evaluate("estimatedInfected = infectedPercentage * " + numOfCases).toString())

      console.log(sim.evaluate("i0 = estimatedInfected / " + numOfPopulation).toString())
      console.log(sim.evaluate("r0 = estimatedRemoved / " + numOfPopulation).toString())
      console.log(sim.evaluate("s0 = 1 - i0 - r0").toString())

      sim.evaluate("dt = 1.0")   // Simulation timestep
      sim.evaluate("tfinal = " + tfinal + ".0") // Simulation duration

      //Calculate deaths in 0% social distancing case
      sim.evaluate("b = 0.0714286") //approx. 1/14
      console.log(sim.evaluate("a = 2.7 * b  / s0").toString()) //Always input the number as string here so Math.js can handle it with its own representation of the numbers!
      sim.evaluate("dsdt(s,i,r) = - a * s * i")
      sim.evaluate("didt(s,i,r) = a * s * i - (b * i)")
      sim.evaluate("drdt(s,i,r) = b * i")

      const matrix0sd = sim.evaluate("resultmatrix = ndsolve([dsdt, didt, drdt], [s0, i0, r0], dt, tfinal)").toString()
      console.log(sim.evaluate("percentage0sd = resultmatrix.subset(index(" + tfinal + ", 3))").toString())


      //Calculate contact rate for 100% social distancing value (needed for interpolation)
      console.log(sim.evaluate("a_min = 0.3 * b / s0").toString())

      //Find the contact rate corresponding to the given sd value
      console.log(sim.evaluate("a_sd = (a_min - a) * " + sdvalue + " + a").toString())

      sim.evaluate("dsdt_sd(s,i,r) = - a_sd * s * i")
      sim.evaluate("didt_sd(s,i,r) = a_sd * s * i - (b * i)")
      sim.evaluate("drdt_sd(s,i,r) = b * i")

      const matrix_sd = sim.evaluate("sd_matrix = ndsolve([dsdt_sd, didt_sd, drdt_sd], [s0, i0, r0], dt, tfinal)").toString()
      console.log(sim.evaluate("percentage_sd = sd_matrix.subset(index(" + tfinal + ", 3))").toString())

      //TODO: check that percentage_sd <= percentage0sd (otherwise makes no sense!)
      const result = sim.evaluate("result = round((percentage0sd - percentage_sd) * 0.02 * " + numOfPopulation + ")").toString()
      const r_eff = sim.evaluate("r_eff = (a_sd / b) * s0").toString()
      return [result, r_eff]
    }
