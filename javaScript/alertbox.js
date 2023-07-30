function openBox(x){
    x.classList.remove('noDisplay');
    body.classList.add('removePageAcess');
}

function closeBox(x){
    x.classList.add('noDisplay');
    body.classList.remove('removePageAcess');
}