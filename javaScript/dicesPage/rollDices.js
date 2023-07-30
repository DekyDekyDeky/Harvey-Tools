var alertBox = document.getElementById('alertBox');
var body = document.getElementById('dicePage');

function rollDices(){
    var qty = Number(document.getElementById('qty').value);
    var diceSides = Number(document.getElementById('diceSides').value);
    var bonus = Number(document.getElementById('bonus').value);

    const allofDices = [qty, diceSides, bonus];

    var allValues = [];

    for (let i = 0; i < allofDices.length; i++) {
        if(allofDices[i] == 0){
            openBox(alertBox1);
            return;
        }      
    }

    var totalValueString = "";

            var sumAllValues = 0;
            
            for (let i = 1; i < (qty + 1); i++) {
                allValues.push(Math.floor(1 + Math.random() * diceSides));
                //console.log(allValues);
            }

            allValues.forEach(element => sumAllValues += element);
            //console.log(sumAllValues);
            
            var totalValue = sumAllValues + bonus;
            //console.log(totalValue);
            
            document.getElementById('totalDice').innerHTML = totalValue;
            document.getElementById('originalDice').innerHTML = sumAllValues + ` [+${bonus}]`;


    allValues.sort((a, b) => {
        return b - a;
    });


    for (let i = 0; i < allValues.length; i++) {
        if(i != (allValues.length - 1)){
            totalValueString += String(allValues[i]) + ", ";
        }else {
            totalValueString += String(allValues[i]);
        }        
    }
    console.log(totalValueString);

    historicTotalValue = totalValue;
    historicQty = qty;
    historicDiceSides = diceSides;
    historicBonus = bonus;

    createHistoric();

    document.getElementById('historic').innerHTML = totalValueString;

    console.log(historicTotalValue);
}
