let path = document.querySelectorAll('#path')
let shareBtn = document.querySelectorAll('#share')
let tab = document.querySelector('.tab')


//color change on mouseover
function pathHover() {
    path.forEach(path => {
        path.style.fill = 'white'    
    });
    
}

//color change on mouseleave
function pathLeave() {
    path.forEach(path => {
        path.style.fill = 'hsl(214, 17%, 51%)'    
    });
    
}


//toggle social tab
function showTab() {
    tab.classList.toggle('hide')
}


//event listeners
shareBtn[0].onclick = showTab; 
shareBtn[1].onclick = showTab
shareBtn.forEach(shareBtn => {
    shareBtn.onmouseover = pathHover
    shareBtn.onmouseleave = pathLeave
})