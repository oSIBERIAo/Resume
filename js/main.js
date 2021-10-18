let specialTags = document.querySelectorAll('[data-x]')
// console.log('specialTags', specialTags)
for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(function () {
    findClosest()
}, 1000)
window.addEventListener('scroll', function (e) {
    findClosest()
})


function findClosest() {
    //绝对值最近的 = minIndex
    // console.log('findClosest')
    let minIndex = 0
    for (var i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY + 55) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY + 55)) {
            minIndex = i
        }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id

    // 移动激活导航栏选框
    let a = document.querySelector('a[href="#' + id + '"]')
    if (a) {
        let ul = a.parentNode.parentNode.children
        for (var i = 0; i < ul.length; i++) {
            ul[i].classList.remove('active')
        }
        a.parentNode.classList.add('active')
    }
}

//分类切换
let article = document.querySelectorAll('.article')
let VUE = document.querySelectorAll('.VUE')
let REACT = document.querySelectorAll('.REACT')
let JS = document.querySelectorAll('.JS')

function hiddenPortfolio() {
    for (let i = 0; i < article.length; i++) {
        article[i].classList.add('hidden')
    }
}

function displayPortfolio(e) {
    for (let i = 0; i < e.length; i++) {
        e[i].classList.remove('hidden')
    }
}


portfolioAll.onclick = function () {
    portfolioBar.className = 'bar'
    console.log('portfolioAll')
    displayPortfolio(article)
}
portfolioVue.onclick = function () {
    portfolioBar.className = 'bar state-2'
    hiddenPortfolio()
    displayPortfolio(VUE)
}
portfolioReact.onclick = function () {
    portfolioBar.className = 'bar state-3'
    hiddenPortfolio()
    displayPortfolio(REACT)
}
portfolioJs.onclick = function () {
    portfolioBar.className = 'bar state-4'
    hiddenPortfolio()
    displayPortfolio(JS)
}


//
