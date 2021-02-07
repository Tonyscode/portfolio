/*
(function () {
    let rotateY = 0,
        rotateX = 0;
    let prevMouse = {x:0, y:0};
    document.onmousemove = function(e) {
        if (e.clientX != prevMouse.x)
            rotateX += 1*(e.clientX > prevMouse.x ? 1 : -1);
        if (e.clientY != prevMouse.y)
            rotateY += 4*(e.clientY > prevMouse.y ? 1 : -1);
        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)'+
            'rotateX(' + rotateX + 'deg)';
        prevMouse.x = e.clientX;
        prevMouse.y = e.clientY;
    };
    document.onkeydown = function (e) {
        if (e.keyCode === 37) rotateY -= 4
        else if (e.keyCode === 38) rotateX += 4
        else if (e.keyCode === 39) rotateY += 4
        else if (e.keyCode === 40) rotateX -= 4

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)'+
            'rotateX(' + rotateX + 'deg)';
    }
})();*/



    // this.querySelectorAll('.layer').forEach(layer =>{
    //     const speed = layer.getAttribute('data-speed');
    //     layer.style.transform = `translateX(${event.clientX*speed/100}px)`
    //
    // });

//document.addEventListener('mousemove', parallax);
//Параллакс эффект


// (function (){
//
//     document.onmousemove = function(ev) {
//         document.querySelectorAll('.layer').forEach(layer=>{
//             const speed = layer.getAttribute('data-speed');
//             layer.style.transform = `translateX(${ev.clientX*speed/1000}px)`;
//             console.log(layer.style.transform);
//
//
//         })
//     }
// })();
(function(){

    $('.callback').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        let rotate = 50;
        let el = document.querySelector('.order');
        el.style.transform = 'rotate(' + rotate + 'deg)';
        console.log(el.style.transform);
    });


})();
