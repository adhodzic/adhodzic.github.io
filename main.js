let maap = function (val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
  
let cont = document.getElementsByClassName("container")
for(let i = 0; i < 500;i++){
    let element = document.createElement("i");
    let r = Math.floor(Math.random() * 200);
    let ra = Math.random() * (10000 - 5000) + 5000;
    let prop =  maap(ra,10000, 5000, 2, 15);
    element.style.setProperty('--height',prop+"px");
    element.style.setProperty('--width', prop+"px");
    element.animate([
    // keyframes
    { transform: `translate(${r}vh,-15px)` },
    { transform: `translate(${r}vh,101vh)` }
    ], {
        // timing options
        duration: ra,
        iterations: Infinity
    });
    cont[0].appendChild(element);
}