const navbar = document.getElementById('navbar')
const hiddenSection = document.querySelectorAll('.hiddenSection')
const btn = document.querySelectorAll('.btn')
const skillDiv = document.querySelector('.skillDiv')
const skills = document.querySelectorAll('.skill')

window.addEventListener('scroll',()=>{
    if(window.scrollY>10){
        navbar.classList.add('navColor')
    }
    else{
        navbar.classList.remove('navColor')
    }
})


btn.forEach(b => {
    b.addEventListener('click',()=>{
        hiddenSection.forEach(section=>{
            section.classList.toggle('hiddenSection')
        })
    })
})

const observer = new IntersectionObserver((entries) => {
    console.log('entering')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillDiv.classList.add('showSkill');
            observer.unobserve(skillDiv); // 👈 run only once
        }
    });
});

observer.observe(skillDiv);