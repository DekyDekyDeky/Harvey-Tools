var historicTotalValue = 0;
var historicQty = 0;
var historicDiceSides = 0;
var historicBonus = 0;

var allHistoricValue = 0;

var HistoricValue = document.getElementById('historic__values');
var allHistoric = document.getElementsByClassName('historic__values--value');

function createHistoric(){
    const historicNewDiv = document.createElement("div");
    historicNewDiv.classList.add('historic__values--value');    
    HistoricValue.insertBefore(historicNewDiv, HistoricValue.firstChild);
    historicNewDiv.setAttribute("id", "historic__values--value");

    const historicNewDices = document.createElement('h3');
    historicNewDices.classList.add('historic__values--value-dicesAndBonus', 'bgThird', 'textNumber');
    var historicNewDicesText = document.createTextNode(historicQty + 'd' + historicDiceSides + ' + ' + historicBonus);
    historicNewDices.appendChild(historicNewDicesText);
    historicNewDiv.appendChild(historicNewDices);

    const historicNewResult = document.createElement('h3');
    historicNewResult.classList.add('historic__values--value-diceResult', 'bgThird', 'textNumber');
    var historicNewResultText = document.createTextNode(historicTotalValue);
    historicNewResult.appendChild(historicNewResultText);
    historicNewDiv.appendChild(historicNewResult);

    allHistoricValue++;
}

function eraseHistoric(){
    for (let i = 0; i < allHistoricValue; i++) {
        document.getElementById("historic__values--value").remove();
    }

    closeBox(alertBox2);

    allHistoricValue = 0;
}

