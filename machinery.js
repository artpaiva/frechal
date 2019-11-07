

window.onscroll = function (){ 
    var cornice  = document.getElementById('cornice');
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 0 ) {
        cornice.classList.add("scroll");
        console.log(cornice.classList);
    } 
    else {
        cornice.classList.remove("scroll");
    }
};

function turnTorsoPanel(ele) {
    ele.classList.toggle("active");
}