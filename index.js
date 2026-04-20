const hiddenSection = document.querySelectorAll('.hiddenSection')
const btn = document.querySelectorAll('.btn')
btn.forEach(b => {
    b.addEventListener('click',()=>{
        hiddenSection.forEach(section=>{
            section.classList.toggle('hiddenSection')
        })
    })
})