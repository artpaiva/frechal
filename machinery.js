
var h = window;
var scrollClass = 'scrolle';

window.onscroll = function (){ 
    var cornice  = document.getElementById('cornice');
    // console.log(document.body.scrollTop);
    if (document.body.scrollTop > 0 ) {
        cornice.classList.add(scrollClass);
        // console.log(cornice.classList);
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

// Loading a next article below the last article just read
var currentNext = 1;
var maxNext = 3;
window.addEventListener('load', function() {
    watchNext();
});

function whatNext (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            fillArticle(h.target);
            observer.unobserve(h.target);
            if(currentNext <= maxNext){
                var tellNext = setInterval( () => {
                    watchNext();
                    clearInterval(tellNext);
                }, 1000);
            }
        }
    });
}
function watchNext () {
    h.previousArticle = document.querySelector(`#article-${currentNext}`);
    let options = {
      rootMargin: '0px',
      threshold: 0.8,
    }
    var next = document.createElement('div');
    var targetID = `next-${currentNext}`;
    next.id = targetID;
    h.previousArticle.parentNode.insertBefore(next, h.previousArticle.nextSibling);
    h.target = document.querySelector(`#${targetID}`);
    var observer = new IntersectionObserver(whatNext, options);
    observer.observe(h.target);
}

function fillArticle (element) {
    var separator = document.createElement('div');
    separator.classList.add('article-next');
    h.previousArticle.parentNode.insertBefore(separator, h.previousArticle.nextSibling);
    element.classList.add('article');
    currentNext += 1;
    element.id = `article-${currentNext}`;
    element.innerHTML = document.querySelector('#article-1').innerHTML;
}