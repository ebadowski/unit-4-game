/////////////////////////////////////////////////////
/////////             Variables            //////////
/////////////////////////////////////////////////////
var square = {
    worth: Math.floor(Math.random() * 100 + 1),
    imgLink: "",
};
var circle = {
    worth: Math.floor(Math.random() * 100 + 1),
    imgLink: "",
};
var triangle = {
    worth: Math.floor(Math.random() * 100 + 1),
    imgLink: "",
};
var pentagon = {
    worth: Math.floor(Math.random() * 100 + 1),
    imgLink: "",
};

var wins = 0;
var losses = 0;
var target = Math.floor(Math.random() * 100 + 1);
var total = 0;

/////////////////////////////////////////////////////
/////////            Running Code          //////////
/////////////////////////////////////////////////////

buildPage();

/////////////////////////////////////////////////////
/////////             Functions            //////////
/////////////////////////////////////////////////////
function buildPage() {
    //empty game div
    $("#game").empty();
    //Inside game div:
    //create target div
    $('<div/>', {
        id: 'target-score',
        //class: 'class',
        //title: 'now this div has a title!'
    }).appendTo('#game');
    $("#target-score").text(target);
    //create score div
    $('<div/>', {
        id: 'score'
    }).appendTo('#game');
    $('<div/>', {
        id: 'wins'
    }).appendTo('#score');
    $('<div/>', {
        id: 'losses'
    }).appendTo('#score');
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    //create buttons div
    $('<div/>', {
        id: 'buttons'
    }).appendTo('#game');
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
    $('<div/>', {
        id: 'score-header'
    }).appendTo('#game');
    //create score div
    $('<div/>', {
        id: 'score'
    }).appendTo('#game');

}
function updatePage(){
    $("#target-score").text(target);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
}


