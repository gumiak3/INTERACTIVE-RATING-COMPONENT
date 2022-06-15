const mainButton = document.getElementById('submit-button');
const ratingNumbers = document.querySelectorAll('.rating-number');
const questionnaire = document.getElementById('question-card');
const appreciatingCard = document.getElementById('appreciating-card');
let activeAmmount = 0; // how many rating buttons are clicked 

ratingNumbers.forEach(input => input.addEventListener('click' , (event)=>{
    for(let i=0;i<input.textContent;i++) ratingNumbers[i].setAttribute('toggle','active'); // set toggle active to all buttons that are in the range of number which was clicked button
    for(let i=4;i>=input.textContent;i--) ratingNumbers[i].setAttribute('toggle','inactive'); // set toggle inactive to all butons that aren't in the range of number which was clicked;
    activeAmmount = input.textContent;
}));

mainButton.addEventListener('click',(event)=>{ // applying the result of questionnaire
    if(activeAmmount>0) 
    {
        questionnaire.style.display = 'none';
        appreciatingCard.style.display='block';
        document.getElementById('selected-ammount').innerHTML=`You selected ${activeAmmount} out of 5`;
    }
    });