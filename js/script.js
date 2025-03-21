var colors = document.getElementById("colors");
console.log(colors.value)
var myCanvas = document.getElementById("myCanvas")
var btn = document.getElementById("click")
var ctx = myCanvas.getContext("2d")
colors.addEventListener("input", function (e) {
  ctx.strokeStyle = e.target.value
})
btn.addEventListener("click", function () {
  for (var i = 0; i < 1000; i++) {
    var rndX = parseInt(Math.random() * window.innerWidth)
    var rndY = parseInt(Math.random() * window.innerHeight)
    ctx.beginPath();
    ctx.arc(rndX, rndY, 20, 0, 2 * Math.PI);
    ctx.stroke();
    colors.addEventListener("input", function (e) {
      ctx.clearRect(0, 0, 1600, 800)
    })
  }
})  
