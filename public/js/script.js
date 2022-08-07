const submitButton = document.querySelector('.submitButton');
const cardContainer1 = document.querySelectorAll('.containerCard')[0];
const cardContainer2 = document.querySelectorAll('.containerCard')[1];
const scoreRate = document.querySelectorAll('.ratesButtons');
const score = document.querySelector('.score');
let domScore = 3 // default value

submitButton.addEventListener('click', onSubmit);
scoreRate.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(){
    cardContainer1.classList.add('hide');
    score.textContent = domScore;
    cardContainer2.classList.remove('hide');
    //console.log('submit click');
}

function handleRatingBtnClick(event) {
    scoreRate.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('ratesButtons')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    // parse stars score
    domScore = event.target.textContent;
    //console.log(domScore);
}