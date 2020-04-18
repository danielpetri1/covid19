var slider = document.getElementById("myRange");
var sd_factor = document.getElementById("sd_factor");
var result = document.getElementById("result_header");

//sd_factor.innerHTML = slider.value;
//result_header.innerHTML = sd_factor.innerHTML;

function getDatabase(){
  return fetch(fusionbase,otherParam).then(function(value){
    return value.json();
  });
}

var fusionbase = "https://cors-anywhere.herokuapp.com/https://api.public.fusionbase.io/cases/latest"

const otherParam={
  method:"GET",
  "headers":{
    "X-API-Key":"58f3bf99-3ecc-4c89-a31e-7fa332b19f77"
  }
  //"Content-Type":"application/json"
}

var city = "München"

document.getElementById("city_input").onkeypress = function(event){
  if (event.keyCode == 13 || event.which == 13){
    city = document.getElementById("city_input").value;
    slider.oninput(); //refreshes numbers
  }
};

function refreshCity(){
  city = document.getElementById("city_input").value;
  slider.oninput() //refreshes numbers
}

getDatabase().then(function(db){

  console.log("fresh database loaded successfully");

  slider.oninput = function () {
      //var city = decodeURIComponent(window.location.search.substring(6));
      //console.log("received city: " + city)
      // Default fallback
      if(city === "" ||  !(city == "Stormarn" ||
      city == "Plön" ||
      city == "Kiel" ||
      city == "Lübeck" ||
      city == "Segeberg" ||
      city == "Steinburg" ||
      city == "Ostholstein" ||
      city == "Schleswig-Flensburg" ||
      city == "Rendsburg-Eckernförde" ||
      city == "Pinneberg" ||
      city == "Nordfriesland" ||
      city == "Flensburg" ||
      city == "Dithmarschen" ||
      city == "Herzogtum Lauenburg" ||
      city == "Neumünster" ||
      city == "Hamburg" ||
      city == "Leer" ||
      city == "Goslar" ||
      city == "Stade" ||
      city == "Ammerland" ||
      city == "Wittmund" ||
      city == "Hildesheim" ||
      city == "Friesland" ||
      city == "Holzminden" ||
      city == "Delmenhorst" ||
      city == "Wolfsburg" ||
      city == "Schaumburg" ||
      city == "Göttingen" ||
      city == "Wesermarsch" ||
      city == "Osterholz" ||
      city == "Diepholz" ||
      city == "Helmstedt" ||
      city == "Northeim" ||
      city == "Vechta" ||
      city == "Emden" ||
      city == "Rotenburg (Wümme)" ||
      city == "Celle" ||
      city == "Region Hannover" ||
      city == "Grafschaft Bentheim" ||
      city == "Osnabrück" ||
      city == "Cuxhaven" ||
      city == "Uelzen" ||
      city == "Lüchow-Dannenberg" ||
      city == "Gifhorn" ||
      city == "Oldenburg (Oldb)" ||
      city == "Wolfenbüttel" ||
      city == "Hameln-Pyrmont" ||
      city == "Heidekreis" ||
      city == "Aurich" ||
      city == "Nienburg (Weser)" ||
      city == "Peine" ||
      city == "Oldenburg" ||
      city == "Lüneburg" ||
      city == "Verden" ||
      city == "Braunschweig" ||
      city == "Wilhelmshaven" ||
      city == "Emsland" ||
      city == "Harburg" ||
      city == "Salzgitter" ||
      city == "Cloppenburg" ||
      city == "Bremerhaven" ||
      city == "Bremen" ||
      city == "Dortmund" ||
      city == "Bottrop" ||
      city == "Mülheim an der Ruhr" ||
      city == "Hochsauerlandkreis" ||
      city == "Bonn" ||
      city == "Münster" ||
      city == "Steinfurt" ||
      city == "Recklinghausen" ||
      city == "Remscheid" ||
      city == "Paderborn" ||
      city == "Mettmann" ||
      city == "Hamm" ||
      city == "Gütersloh" ||
      city == "Solingen" ||
      city == "Rheinisch-Bergischer Kreis" ||
      city == "Wuppertal" ||
      city == "Rhein-Sieg-Kreis" ||
      city == "Städteregion Aachen" ||
      city == "Borken" ||
      city == "Rhein-Kreis Neuss" ||
      city == "Wesel" ||
      city == "Soest" ||
      city == "Rhein-Erft-Kreis" ||
      city == "Olpe" ||
      city == "Viersen" ||
      city == "Krefeld" ||
      city == "Essen" ||
      city == "Herne" ||
      city == "Coesfeld" ||
      city == "Oberbergischer Kreis" ||
      city == "Düsseldorf" ||
      city == "Kleve" ||
      city == "Bochum" ||
      city == "Köln" ||
      city == "Gelsenkirchen" ||
      city == "Leverkusen" ||
      city == "Heinsberg" ||
      city == "Warendorf" ||
      city == "Oberhausen" ||
      city == "Bielefeld" ||
      city == "Hagen" ||
      city == "Minden-Lübbecke" ||
      city == "Höxter" ||
      city == "Euskirchen" ||
      city == "Düren" ||
      city == "Unna" ||
      city == "Ennepe-Ruhr-Kreis" ||
      city == "Mönchengladbach" ||
      city == "Lippe" ||
      city == "Märkischer Kreis" ||
      city == "Siegen-Wittgenstein" ||
      city == "Herford" ||
      city == "Duisburg" ||
      city == "Darmstadt" ||
      city == "Fulda" ||
      city == "Limburg-Weilburg" ||
      city == "Gießen" ||
      city == "Vogelsbergkreis" ||
      city == "Wetteraukreis" ||
      city == "Kassel" ||
      city == "Rheingau-Taunus-Kreis" ||
      city == "Waldeck-Frankenberg" ||
      city == "Odenwaldkreis" ||
      city == "Hersfeld-Rotenburg" ||
      city == "Groß-Gerau" ||
      city == "Frankfurt am Main" ||
      city == "Marburg-Biedenkopf" ||
      city == "Main-Kinzig-Kreis" ||
      city == "Werra-Meißner-Kreis" ||
      city == "Bergstraße" ||
      city == "Schwalm-Eder-Kreis" ||
      city == "Hochtaunuskreis" ||
      city == "Wiesbaden" ||
      city == "Lahn-Dill-Kreis" ||
      city == "Main-Taunus-Kreis" ||
      city == "Darmstadt-Dieburg" ||
      city == "Offenbach" ||
      city == "Offenbach am Main" ||
      city == "Bernkastel-Wittlich" ||
      city == "Landau in der Pfalz" ||
      city == "Westerwaldkreis" ||
      city == "Vulkaneifel" ||
      city == "Birkenfeld" ||
      city == "Trier-Saarburg" ||
      city == "Südwestpfalz" ||
      city == "Alzey-Worms" ||
      city == "Pirmasens" ||
      city == "Frankenthal (Pfalz)" ||
      city == "Mayen-Koblenz" ||
      city == "Speyer" ||
      city == "Altenkirchen (Westerwald)" ||
      city == "Kaiserslautern" ||
      city == "Donnersbergkreis" ||
      city == "Zweibrücken" ||
      city == "Worms" ||
      city == "Eifelkreis Bitburg-Prüm" ||
      city == "Koblenz" ||
      city == "Bad Kreuznach" ||
      city == "Mainz" ||
      city == "Bad Dürkheim" ||
      city == "Cochem-Zell" ||
      city == "Trier" ||
      city == "Neuwied" ||
      city == "Rhein-Hunsrück-Kreis" ||
      city == "Ludwigshafen am Rhein" ||
      city == "Germersheim" ||
      city == "Kusel" ||
      city == "Rhein-Pfalz-Kreis" ||
      city == "Südliche Weinstraße" ||
      city == "Rhein-Lahn-Kreis" ||
      city == "Mainz-Bingen" ||
      city == "Ahrweiler" ||
      city == "Neustadt an der Weinstraße" ||
      city == "Esslingen" ||
      city == "Rottweil" ||
      city == "Neckar-Odenwald-Kreis" ||
      city == "Ravensburg" ||
      city == "Heilbronn" ||
      city == "Tübingen" ||
      city == "Ludwigsburg" ||
      city == "Breisgau-Hochschwarzwald" ||
      city == "Göppingen" ||
      city == "Rhein-Neckar-Kreis" ||
      city == "Tuttlingen" ||
      city == "Biberach" ||
      city == "Waldshut" ||
      city == "Mannheim" ||
      city == "Rastatt" ||
      city == "Zollernalbkreis" ||
      city == "Schwäbisch Hall" ||
      city == "Böblingen" ||
      city == "Konstanz" ||
      city == "Karlsruhe" ||
      city == "Ulm" ||
      city == "Hohenlohekreis" ||
      city == "Lörrach" ||
      city == "Rems-Murr-Kreis" ||
      city == "Schwarzwald-Baar-Kreis" ||
      city == "Emmendingen" ||
      city == "Sigmaringen" ||
      city == "Bodenseekreis" ||
      city == "Freudenstadt" ||
      city == "Heidenheim" ||
      city == "Ostalbkreis" ||
      city == "Alb-Donau-Kreis" ||
      city == "Freiburg im Breisgau" ||
      city == "Main-Tauber-Kreis" ||
      city == "Pforzheim" ||
      city == "Calw" ||
      city == "Stuttgart" ||
      city == "Enzkreis" ||
      city == "Reutlingen" ||
      city == "Ortenaukreis" ||
      city == "Heidelberg" ||
      city == "Baden-Baden" ||
      city == "Freyung-Grafenau" ||
      city == "Kelheim" ||
      city == "Augsburg" ||
      city == "Erding" ||
      city == "Coburg" ||
      city == "Starnberg" ||
      city == "Lichtenfels" ||
      city == "Dachau" ||
      city == "Neustadt a.d. Waldnaab" ||
      city == "Bayreuth" ||
      city == "Bamberg" ||
      city == "Dillingen a.d. Donau" ||
      city == "Miesbach" ||
      city == "Weißenburg-Gunzenhausen" ||
      city == "Altötting" ||
      city == "Straubing" ||
      city == "Schwandorf" ||
      city == "Rhön-Grabfeld" ||
      city == "Landshut" ||
      city == "Donau-Ries" ||
      city == "Unterallgäu" ||
      city == "Nürnberg" ||
      city == "Lindau (Bodensee)" ||
      city == "Memmingen" ||
      city == "Neustadt a.d. Aisch-Bad Windsheim" ||
      city == "Kaufbeuren" ||
      city == "Ingolstadt" ||
      city == "Aschaffenburg" ||
      city == "Cham" ||
      city == "Neu-Ulm" ||
      city == "Garmisch-Partenkirchen" ||
      city == "Kempten (Allgäu)" ||
      city == "Eichstätt" ||
      city == "Rottal-Inn" ||
      city == "Schweinfurt" ||
      city == "Aichach-Friedberg" ||
      city == "Straubing-Bogen" ||
      city == "Forchheim" ||
      city == "Würzburg" ||
      city == "Traunstein" ||
      city == "Bad Tölz-Wolfratshausen" ||
      city == "Weiden i.d. OPf." ||
      city == "Erlangen-Höchstadt" ||
      city == "Haßberge" ||
      city == "Neumarkt i.d. OPf." ||
      city == "Rosenheim" ||
      city == "Erlangen" ||
      city == "Mühldorf a. Inn" ||
      city == "Ansbach" ||
      city == "Neuburg-Schrobenhausen" ||
      city == "Roth" ||
      city == "Schwabach" ||
      city == "Passau" ||
      city == "Fürstenfeldbruck" ||
      city == "Fürth" ||
      city == "Hof" ||
      city == "München" ||
      city == "Deggendorf" ||
      city == "Amberg" ||
      city == "Regensburg" ||
      city == "Ebersberg" ||
      city == "Nürnberger Land" ||
      city == "Landsberg am Lech" ||
      city == "Tirschenreuth" ||
      city == "Regen" ||
      city == "Bad Kissingen" ||
      city == "Freising" ||
      city == "Main-Spessart" ||
      city == "Miltenberg" ||
      city == "Weilheim-Schongau" ||
      city == "Kronach" ||
      city == "Pfaffenhofen a.d. Ilm" ||
      city == "Berchtesgadener Land" ||
      city == "Kulmbach" ||
      city == "Wunsiedel i. Fichtelgebirge" ||
      city == "Günzburg" ||
      city == "Amberg-Sulzbach" ||
      city == "Oberallgäu" ||
      city == "Dingolfing-Landau" ||
      city == "Kitzingen" ||
      city == "Ostallgäu" ||
      city == "Saarpfalz-Kreis" ||
      city == "Merzig-Wadern" ||
      city == "Saarlouis" ||
      city == "Regionalverband Saarbrücken" ||
      city == "Neunkirchen" ||
      city == "St. Wendel" ||
      city == "Berlin" ||
      city == "Elbe-Elster" ||
      city == "Teltow-Fläming" ||
      city == "Dahme-Spreewald" ||
      city == "Havelland" ||
      city == "Potsdam" ||
      city == "Oberspreewald-Lausitz" ||
      city == "Brandenburg an der Havel" ||
      city == "Spree-Neiße" ||
      city == "Prignitz" ||
      city == "Uckermark" ||
      city == "Cottbus" ||
      city == "Ostprignitz-Ruppin" ||
      city == "Oberhavel" ||
      city == "Frankfurt (Oder)" ||
      city == "Potsdam-Mittelmark" ||
      city == "Barnim" ||
      city == "Märkisch-Oderland" ||
      city == "Oder-Spree" ||
      city == "Nordwestmecklenburg" ||
      city == "Schwerin" ||
      city == "Ludwigslust-Parchim" ||
      city == "Mecklenburgische Seenplatte" ||
      city == "Vorpommern-Greifswald" ||
      city == "Vorpommern-Rügen" ||
      city == "Rostock" ||
      city == "Vogtlandkreis" ||
      city == "Meißen" ||
      city == "Erzgebirgskreis" ||
      city == "Mittelsachsen" ||
      city == "Sächsische Schweiz-Osterzgebirge" ||
      city == "Chemnitz" ||
      city == "Dresden" ||
      city == "Bautzen" ||
      city == "Nordsachsen" ||
      city == "Leipzig" ||
      city == "Görlitz" ||
      city == "Zwickau" ||
      city == "Börde" ||
      city == "Harz" ||
      city == "Wittenberg" ||
      city == "Dessau-Roßlau" ||
      city == "Altmarkkreis Salzwedel" ||
      city == "Saalekreis" ||
      city == "Jerichower Land" ||
      city == "Burgenlandkreis" ||
      city == "Salzlandkreis" ||
      city == "Stendal" ||
      city == "Anhalt-Bitterfeld" ||
      city == "Magdeburg" ||
      city == "Halle (Saale)" ||
      city == "Mansfeld-Südharz" ||
      city == "Sonneberg" ||
      city == "Schmalkalden-Meiningen" ||
      city == "Gera" ||
      city == "Hildburghausen" ||
      city == "Weimar" ||
      city == "Eichsfeld" ||
      city == "Weimarer Land" ||
      city == "Saale-Holzland-Kreis" ||
      city == "Saale-Orla-Kreis" ||
      city == "Erfurt" ||
      city == "Unstrut-Hainich-Kreis" ||
      city == "Kyffhäuserkreis" ||
      city == "Sömmerda" ||
      city == "Wartburgkreis" ||
      city == "Saalfeld-Rudolstadt" ||
      city == "Eisenach" ||
      city == "Gotha" ||
      city == "Suhl" ||
      city == "Nordhausen" ||
      city == "Jena" ||
      city == "Ilm-Kreis" ||
      city == "Greiz" ||
      city == "Altenburger Land")){
        city = "München";
        window.location.reload(true);
      }

      //console.log(city);

      sd_factor.innerHTML = this.value;
      var dbInfo = getData(city, db);

      //console.log(dbInfo[0])
      //console.log(dbInfo[1])
      //console.log(dbInfo[2])
      //console.log(dbInfo[3])
      //console.log(dbInfo[4])
      
      var calcResult = calcLivesSaved(dbInfo[0], dbInfo[1].toString(), dbInfo[2].toString(), dbInfo[3], this.value / 100);
      result_header.innerHTML = calcResult[0];


      document.getElementById("R_eff").innerHTML = "R_eff = " + calcResult[1];
      document.getElementById("casesnerd").innerHTML = "Cases: " + calcResult[2] + " (considering city and Landkreis!)";
      document.getElementById("popnerd").innerHTML = "Population: " + calcResult[3] + " (considering city and Landkreis!)";
      document.getElementById("contact_chosen").innerHTML = "Contact rate (your chosen value): " + calcResult[6];
      document.getElementById("contact_max").innerHTML = "Contact rate (0% social distancing): " + calcResult[4];
      document.getElementById("contact_min").innerHTML = "Contact rate (100% social distancing): " + calcResult[5];
      document.getElementById("percentage0sd_nerd").innerHTML = "Percentage infected in chosen city with 0% social distancing after end of pandemic: " + calcResult[7]; 
      document.getElementById("percentagesd_nerd").innerHTML = "Percentage infected in chosen city with " + this.value + "% social distancing after end of pandemic: " + calcResult[8]
      document.getElementById("dataset_update").innerHTML = "Data used from Fusionbase updated on: " + dbInfo[4];
      //7 8

  }
  //-------------------------- BACKBONE ------------------------------

    function getData(name, db) {
      var data = db;
      //console.log(data)
      var results = []

      for (item of data) {
        if (item.location_label.includes(name)){
          results.push(item)
        }
      }

      if (results.length == 0){
        throw "City does not exist"
      }
      //console.log(data)
      //console.log(results)

      var cases = 0;
      var population = 0;
      var region = results[0].bundesland_name;

      for (item of results){
        //console.log(item.cases)
        cases += item.cases;
        //console.log(item.population)
        population += item.population;
        /*
        if (item.bundesland_name != region){
          throw "Internal error 3: Inconsistent dataset detected, " + item.bundesland_name + ", " + region
        }
        */
      }

      //console.log(name)
      //console.log(cases)
      //console.log(population)
      //console.log(region)


      return [name, cases, population, region, results[0].publication_datetime]
    }

      // ---------- RECOVERY RATES (Genesen / Covid19Faelle) --------------
      var bayern = "0.53293" 
      var nordrheinWestfalen = "0.69922"
      var badenWuerttemberg = "0.55758"
      var niedersachsen = "0.66335"
      var hessen = "0.65671"
      var rheinlandPfalz = "0.67166"
      var berlin = "0.52578"
      var sachsen = "0.5681"
      var hamburg = "0.5681"
      var schleswigHolstein = "0.68"
      var saarland = "0.57675"
      var brandenburg = "0.666"
      var thueringen = "0.6875"
      var sachenAnhalt = "0.75"
      var mecklenburg = "0.78"
      var bremen = "0.72"
      // ---------- RECOVERY RATES --------------
      

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

      function calcLivesSaved(nameOfCity, numOfCases, numOfPopulation, nameOfRegion, sdvalue){ //OUR MAIN FUNCTION

        var recoveryRateInRegion = "INVALID"
        if (nameOfRegion == "Bayern"){
          recoveryRateInRegion = bayern
        } else if (nameOfRegion == "Nordrhein-Westfalen"){
          recoveryRateInRegion = nordrheinWestfalen
        } else if (nameOfRegion == "Baden-Württemberg"){
          recoveryRateInRegion = badenWuerttemberg
        } else if (nameOfRegion == "Niedersachsen"){
          recoveryRateInRegion = niedersachsen
        } else if (nameOfRegion == "Hessen"){
          recoveryRateInRegion = hessen
        } else if (nameOfRegion == "Rheinland-Pfalz"){
          recoveryRateInRegion = rheinlandPfalz
        } else if (nameOfRegion == "Berlin"){
          recoveryRateInRegion = berlin
        } else if (nameOfRegion == "Sachsen"){
          recoveryRateInRegion = sachsen
        } else if (nameOfRegion == "Hamburg"){
          recoveryRateInRegion = hamburg
        } else if (nameOfRegion == "Schleswig-Holstein"){
          recoveryRateInRegion = schleswigHolstein
        } else if (nameOfRegion == "Saarland"){
          recoveryRateInRegion = saarland
        } else if (nameOfRegion == "Brandenburg"){
          recoveryRateInRegion = brandenburg
        } else if (nameOfRegion == "Thüringen"){
          recoveryRateInRegion = thueringen
        } else if (nameOfRegion == "Sachsen-Anhalt"){
          recoveryRateInRegion = sachenAnhalt
        } else if (nameOfRegion == "Mecklenburg-Vorpommern"){
          recoveryRateInRegion = mecklenburg
        } else if (nameOfRegion == "Bremen"){
          recoveryRateInRegion = bremen
        } else {
          throw "Internal error 0: invalid nameOfRegion"
        }

        if (parseFloat(numOfCases) < 0.0 || parseFloat(numOfPopulation) <= 0.0 
            || parseFloat(recoveryRateInRegion) < 0.0 || parseFloat(recoveryRateInRegion) > 0.98
            || parseFloat(sdvalue) < 0 || parseFloat(sdvalue) > 1){
          throw "Internal error 1: invalid input parameters."
        }

        const sim = math.parser()
        var tfinal = "700" //how long the simulation keeps going... Always input an integer in string representation here!!

        sim.evaluate("estimatedRecovered = " + recoveryRateInRegion + " * " + numOfCases)
        sim.evaluate("estimatedDead = 0.02 * " + numOfCases)

        sim.evaluate("estimatedRemoved = estimatedRecovered + estimatedDead")
        sim.evaluate("infectedPercentage = 1 - 0.02 - " + recoveryRateInRegion)
        sim.evaluate("estimatedInfected = infectedPercentage * " + numOfCases)

        sim.evaluate("i0 = estimatedInfected / " + numOfPopulation)
        sim.evaluate("r0 = estimatedRemoved / " + numOfPopulation)
        sim.evaluate("s0 = 1 - i0 - r0")

        sim.evaluate("dt = 1.0")   // Simulation timestep
        sim.evaluate("tfinal = " + tfinal + ".0") // Simulation duration

        //Calculate deaths in 0% social distancing case
        sim.evaluate("b = 0.0714286") //approx. 1/14
        sim.evaluate("a = 2.7 * b  / s0") //Always input the number as string here so Math.js can handle it with its own representation of the numbers!
        sim.evaluate("dsdt(s,i,r) = - a * s * i")
        sim.evaluate("didt(s,i,r) = a * s * i - (b * i)")
        sim.evaluate("drdt(s,i,r) = b * i")

        const matrix0sd = sim.evaluate("resultmatrix = ndsolve([dsdt, didt, drdt], [s0, i0, r0], dt, tfinal)").toString()
        sim.evaluate("percentage0sd = resultmatrix.subset(index(" + tfinal + ", 3))").toString()


        //Calculate contact rate for 100% social distancing value (needed for interpolation)
        sim.evaluate("a_min = 0.3 * b / s0").toString()

        //Find the contact rate corresponding to the given sd value
        sim.evaluate("a_sd = (a_min - a) * " + sdvalue + " + a").toString()

        sim.evaluate("dsdt_sd(s,i,r) = - a_sd * s * i")
        sim.evaluate("didt_sd(s,i,r) = a_sd * s * i - (b * i)")
        sim.evaluate("drdt_sd(s,i,r) = b * i")

        const matrix_sd = sim.evaluate("sd_matrix = ndsolve([dsdt_sd, didt_sd, drdt_sd], [s0, i0, r0], dt, tfinal)").toString()
        sim.evaluate("percentage_sd = sd_matrix.subset(index(" + tfinal + ", 3))").toString()

        //check that percentage_sd <= percentage0sd (otherwise makes no sense!)
        if (parseFloat(sim.evaluate("percentage_sd").toString()) > parseFloat(sim.evaluate("percentage0sd"))){
          throw "Internal error 2: invalid percentages in calculation"
        }


        const result = sim.evaluate("result = round((percentage0sd - percentage_sd) * 0.02 * " + numOfPopulation + ")").toString()
        const r_eff = sim.evaluate("r_eff = (a_sd / b) * s0").toString()
        return [result, r_eff, numOfCases, numOfPopulation, sim.evaluate("a").toString(), sim.evaluate("a_min").toString(), sim.evaluate("a_sd").toString(),
                sim.evaluate("percentage0sd").toString(), sim.evaluate("percentage_sd").toString()]
      }

      //-------------------------- BACKBONE ------------------------------
  })

