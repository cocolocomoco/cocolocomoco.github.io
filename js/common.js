var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {

    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;

    ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }
    noise(ctx);
    requestAnimationFrame(loop);
})();






var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight


function amountscrolled(){

	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop


    if (scrollTop > winheight) {
    	document.getElementById("header").className = 'solid';
    }else{
    	document.getElementById("header").classList.remove('solid');
    }
}

window.addEventListener("scroll", function(){
	amountscrolled()
}, false);







// window.onscroll = function() {myFunction()};




// function myFunction() {
// 	console.log(document.body.scrollTop)
//   if (document.body.scrollTop > winHeight) {
//     document.getElementById("header").className = 'solid';
//   }else{
//   	 document.getElementById("header").classList.remove('solid');
//   }
// }