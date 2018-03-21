// Computer will generate random number //

var computerNumber = Math.floor(Math.random() * 120) + 19;

$("#targetNumber").text(computerNumber);



var crystalValue1 = Math.floor(Math.random() * 12) + 1;
var crystalValue2 = Math.floor(Math.random() * 12) + 1;
var crystalValue3 = Math.floor(Math.random() * 12) + 1;
var crystalValue4 = Math.floor(Math.random() * 12) + 1;
var totalCrystalScore = 0;
var win = 0;
var losses = 0;


function restart(){
    totalCrystalScore = 0;

}

// there will be 4 crystals that will generate numbers per turn //
$(".crystals").on("click", ".crystal1", function () {


    totalCrystalScore += crystalValue1;
    console.log(totalCrystalScore);
    console.log("this is " + crystalValue1);
    totalScoreResult();
});
$(".crystalss").on("click", ".crystal2", function () {

    totalCrystalScore += crystalValue2;
    console.log(totalCrystalScore);
    console.log("this is " + crystalValue2);

    totalScoreResult();

});
$(".crystalsss").on("click", ".crystal3", function () {


    totalCrystalScore += crystalValue3;
    console.log(totalCrystalScore);
    console.log("this is " + crystalValue3);
    totalScoreResult();

});
$(".crystalssss").on("click", ".crystal4", function () {

    totalCrystalScore += crystalValue4;
    console.log(totalCrystalScore);
    console.log("this is " + crystalValue4);
    totalScoreResult();
});

function totalScoreResult() {
    $(".totalScore").text(totalCrystalScore);
    console.log("totalCrystalScore", totalCrystalScore);
    console.log("computerNumber", computerNumber);

    if (totalCrystalScore === computerNumber) {
        win++;
        $("#wins").html("WINS: " + win);
        console.log("WIN!");
        restart();

    }
    else if (totalCrystalScore > computerNumber) {

        losses++;
        $("#losses").html("LOSSES: " + losses);
        console.log("lose!");
        restart();
    }
}





//crystal numbers will go to total score //
  ////

























// crystal numbers will stack up in the total score //
//if total score is the same as computer score then win//
//if total score is the exceeds computer score then lose//

