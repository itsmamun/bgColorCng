var index = 0;

function changeColors(){
    var color = ["red","blue","Brown","Green","Orange","Purple","Yellow"];

    document.getElementsByTagName("body")[0].
    style.background = color [index++];

    if (index > color.length -1)
    index = 0;
}
// console.log(changeColors);