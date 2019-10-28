const gra = function(min, max) {
    return Math.random() * (max - min) + min;
};

const gri = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const init = function(){
    let items = document.querySelectorAll('li');
    for (let i = 0; i < items.length; i++){
        items[i].style.minHeight = 100 + 'vh';
        items[i].style.background = randomColor({luminosity: 'light'});
    }

    // cssScrollSnapPolyfill()
};

init();
