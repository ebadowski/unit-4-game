/////////////////////////////////////////////////////
/////////             Variables            //////////
/////////////////////////////////////////////////////
var square = {
    worth: Math.floor(Math.random() * 12 + 1),
    imgLink: "assets/images/square.jpg", 
};
var circle = {
    worth: Math.floor(Math.random() * 12 + 1),
    imgLink: "assets/images/circle.jpg",
};
var triangle = {
    worth: Math.floor(Math.random() * 12 + 1),
    imgLink: "assets/images/triangle.jpg",
};
var pentagon = {
    worth: Math.floor(Math.random() * 12 + 1),
    imgLink: "assets/images/pentagon.jpg",
};

var wins = 0;
var losses = 0;
var target = Math.floor(Math.random() * 100 + 20);
var total = 0;

/////////////////////////////////////////////////////
/////////            Running Code          //////////
/////////////////////////////////////////////////////

buildPage();

$("#square-coin").on("click", function () {
    total += square.worth;
    checkWin();
    updatePage();
});
$("#circle-coin").on("click", function () {
    total += circle.worth;
    checkWin();
    updatePage();
});
$("#triangle-coin").on("click", function () {
    total += triangle.worth;
    checkWin();
    updatePage();
});
$("#pentagon-coin").on("click", function () {
    total += pentagon.worth;
    checkWin();
    updatePage();
});


/////////////////////////////////////////////////////
/////////             Functions            //////////
/////////////////////////////////////////////////////
function buildPage() {
    //empty game div
    $("#game").empty();
    //Inside game div:
    //create target div
    
    $('<div/>', { id: 'score' }).appendTo('#game');
    $('<div/>', { id: 'target-score' }).appendTo('#game');
    $("#score").text(total);
    $("#target-score").text(target);
    //create score div
    
    $('<div/>', { id: 'wins' }).appendTo('#game');
    $('<div/>', { id: 'losses' }).appendTo('#game');
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    //create buttons div
    $('<div/>', { id: 'buttons' }).appendTo('#game');
    //create buttons
    $('<button/>', {
        id: 'square-coin',
        style: "background-image: url(\"" + square.imgLink + "\")"
    }).appendTo('#buttons');
    $('<button/>', {
        id: 'circle-coin',
        style: "background-image: url(\"" + circle.imgLink + "\")"
    }).appendTo('#buttons');
    $('<button/>', {
        id: 'triangle-coin',
        style: "background-image: url(\"" + triangle.imgLink + "\")"
    }).appendTo('#buttons');
    $('<button/>', {
        id: 'pentagon-coin',
        style: "background-image: url(\"" + pentagon.imgLink + "\")"
    }).appendTo('#buttons');
    //create score header div
    //$('<div/>', {  id: 'score-header' }).appendTo('#game');
    
    

}
function updatePage() {
    $("#target-score").text(target);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#score").text(total);
}
function checkWin(){
    if (total == target){
        wins++;
        newRound();
    }
    else if (total > target){
        losses ++;
        newRound();
    }
}
function newRound(){
    square.worth = Math.floor(Math.random() * 12 + 1);
    circle.worth = Math.floor(Math.random() * 12 + 1);
    triangle.worth = Math.floor(Math.random() * 12 + 1);
    pentagon.worth = Math.floor(Math.random() * 12 + 1);
    target = Math.floor(Math.random() * 100 + 20);
    total = 0;

}

