var circle1 = document.querySelector('.circle1');
var circle2 = document.querySelector('.circle2');
var circle3 = document.querySelector('.circle3');
var circle4 = document.querySelector('.circle4');

window.addEventListener('mousemove', (e) => {
    let top = e.clientX / 50;
    let left = e.clientY / 50;
    circle2.style.transform = `translate(${top}px, ${left}px)`;
    circle1.style.transform = `translate(-${top}px, -${left}px)`;
    circle3.style.transform = `translate(${top}px, -${left}px)`;
    circle4.style.transform = `translate(-${top}px, ${left}px)`;
});

function valueFunction(value, range, rangeValue) {
    var value = document.querySelector(value);
    var range = document.querySelector(range);
    var rangeValue = document.querySelector(rangeValue);

    range.addEventListener('input', (e) => {
        rangeValue.textContent = range.value;
        let rangeOfValue = range.value / 2.55;
        value.style.left = rangeOfValue + '%';
    })
}

valueFunction('.value1', '.range1', '.rangeValue1');
valueFunction('.value2', '.range2', '.rangeValue2');
valueFunction('.value3', '.range3', '.rangeValue3');

var MainValue = document.querySelectorAll('.value');
var MainRange = document.querySelectorAll('.range');
var MainRangeValue = document.querySelectorAll('.rangeValue');
var body = document.querySelector('body');

for (let i = 0; i < MainRange.length; i++) {
    MainRange[i].addEventListener('input', () => {
        let red = MainRange[0].value;
        let green = MainRange[1].value;
        let blue = MainRange[2].value;
        body.style.background = `rgb(${red}, ${green}, ${blue})`;
    })
}