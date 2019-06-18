function add(params) {
    $(".rotatein").removeClass("rotatein");
    $('section').prepend(`<div class="pen rotatein">
    <img src="https://res3.hixianchang.com/qn/wx/5bf1e053bf60724905b71ef2eb15cfe7.jpg" alt="" srcset="">
    <p>叮当猫</p>
</div>`)
}
setInterval(add, 5000);