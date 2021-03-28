/* This is my JS file for my Dice Roller game it handles the rolling for the game and also figuring out the winner

The winner if decided by who holds the highest dice number between all rolled dice ties go to defender*/
function rollFiveDiceShowWinner() {
    document.getElementById("attackerDice1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("attackerDice2").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("attackerDice3").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("defenderDice1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("defenderDice2").value = Math.floor(Math.random()*6) + 1;
    attackerDice1 = document.getElementById("attackerDice1").value
    attackerDice2 = document.getElementById("attackerDice2").value
    attackerDice3 = document.getElementById("attackerDice3").value
    defenderDice1 = document.getElementById("defenderDice1").value
    defenderDice2 = document.getElementById("defenderDice2").value
// FInding the winner this is done by getting the bax of each attackers rolls and checking if the defender if greater or equal to their max
    if (Math.max(defenderDice1,defenderDice2) >= Math.max(attackerDice1,attackerDice2,attackerDice3)){
        Winner = "Defender"      
    } else {
        Winner = "Attacker"
    }
    
    
    document.getElementById("Winner").value = Winner    
    
}