var historicIcon = document.getElementById('historicIcon');
var returnIcon = document.getElementById('return');
var dicePage = document.getElementById('dicePage');
var historicPage = document.getElementById('historicPage');

function goHistoric(){

    const allOfThem = [historicIcon, returnIcon, dicePage, historicPage];

    for (let i = 0; i < allOfThem.length; i++) {
        if(allOfThem[i].classList.contains('noDisplay')){
            allOfThem[i].classList.remove('noDisplay');
        }else {
            allOfThem[i].classList.add('noDisplay');
        }
        
    }
}