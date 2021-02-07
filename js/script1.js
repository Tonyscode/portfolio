
//Typed.js
var options1 = {
    strings: ["Трудолюбивый", "надежный", "ответственный"],
    typeSpeed: 40,
    loop: true,
    loopCount: false,
    showCursor: false,
    startDelay: 20,
    backDelay: 2500,
    backSpeed: 35,
};

if ($('#typed').length > 0) {
    var typed = new Typed("#typed", options1);
};
// Приветствие в зависимости от времени суток
let day = new Date();
let hour = day.getHours();
if(hour>=18 && hour<24){
    $(".greeting").text("Добрый");
    $("#day_time").text("вечер");
}
else if (hour>=0 && hour<5) {
    $('.greeting').text('Доброй');
    $('#day_time').text('ночи');
}
else if (hour>=5 && hour<12) {
    $('.greeting').text('Доброе');
    $('#day_time').text('утро');
}
else if (hour>=12 && hour<18) {
    $('.greeting').text('Добрый');
    $('#day_time').text('день');
}
//эффект Parallax 3D
(function (){

    document.onmousemove = function(ev) {
        document.querySelectorAll('.layer').forEach(layer=>{
            const speed = layer.getAttribute('data-speed');
            layer.style.transform = `translateX(${ev.clientX*speed/1000}px)`;
            //console.log(layer.style.transform);


        })
    }
})();
// Управление лейблом в форме
$('input').focus(function(){
    $(this).parents('.input_data').find('label').css({
        top: '10px',
        fontSize: '10px',
        color: '#868686'
    });

});
$('textarea').focus(function(){
    $(this).parents('.text_form').find('label').css({
        fontSize: '10px',
        color: '#868686',
        top: '10px',



    });

});
