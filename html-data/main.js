var slider = document.getElementById("myRange");
var sd_factor = document.getElementById("sd_factor");
var result = document.getElementById("result_header");

//sd_factor.innerHTML = slider.value;
//result_header.innerHTML = sd_factor.innerHTML;

slider.oninput = function () {
    sd_factor.innerHTML = this.value;
    result_header.innerHTML = square (this.value);
}

// FUNCTION TO DISPLAY OUTPUT
function square(num) {
    return num * num;
}