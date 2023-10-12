window.addEventListener("deviceorientation",ondeviceorientation);

function on_device_orientation(evt){
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;

    document.getElementById("a").innerHTML = "alpha = " + alpha;
    document.getElementById("b").innerHTML = "beta = " + beta;
    document.getElementById("c").innerHTML = "gamma = " + gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var centru = {
        x:canvas.width/2,
        y:canvas.height/2
    }
    var latura_patrat = 50;

    context.setTransform(1,0,0,1,0,0); // inlocuieste matricea de transformare curenta
    context.clearRect(0,0,canvas.width,canvas.height);
    context.translate(centru.x/2, centru.y/2); // remapeaza pozitia pe panza
    context.rotate(alpha * Math.PI/100); // roteste figura
    context.beginPath();
    context.rect(-latura_patrat/2,-latura_patrat/2,latura_patrat,latura_patrat); // deseneaza un dreptunghi
    context.stroke();
}