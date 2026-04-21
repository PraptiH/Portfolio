const navbar = document.getElementById('navbar')
window.addEventListener('scroll',()=>{
    if(window.scrollY>10){
        navbar.classList.add('navColor')
    }
    else{
        navbar.classList.remove('navColor')
    }
})

const hiddenSection = document.querySelectorAll('.hiddenSection')
const btn = document.querySelectorAll('.btn')
btn.forEach(b => {
    b.addEventListener('click',()=>{
        hiddenSection.forEach(section=>{
            section.classList.toggle('hiddenSection')
        })
    })
})