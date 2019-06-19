function add(arr) {
    $(".rotatein").removeClass("rotatein");
    $('section .com').prepend(`<div class="pen rotatein">
    <img src="${arr.img}" alt="" srcset="">
    <p>${arr.name}</p>
</div>`)
}
var i=0;
var setInt = setInterval(function () {
    if (i<Check.CheckArr.length) {
        add(Check.CheckArr[i]);
        i++;
    }else{
        clearInterval(setInt);
        console.info('签到结束')
    }
}, Check.time);

$('.logo img').attr('src',Check.logoUrl);
$('.title p').text(Check.title);
$('.flex span').text(Check.mun);
$("footer p").text(Check.footer)