
var scrollClass = 'scrolle';

window.onscroll = function (){ 
    var cornice  = document.getElementById('cornice');
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 0 ) {
        cornice.classList.add(scrollClass);
        console.log(cornice.classList);
    } 
    else {
        cornice.classList.remove(scrollClass);
    }
};

function turnTorsoPanel(ele) {
    ele.classList.toggle("active");
}

function changeTheme() {
  var check = document.getElementById('check-theme');
  if (check.checked == true){
    console.log('Dark Theme');
    scrollClass = 'scroll';
    if (document.body.scrollTop > 0 ) {
        cornice.classList.add(scrollClass);
    }
    cornice.classList.remove('scrolle');
  } else {
    console.log('Light Theme');
    scrollClass = 'scrolle';
    cornice.classList.add(scrollClass);
    cornice.classList.remove('scroll');
  }
}