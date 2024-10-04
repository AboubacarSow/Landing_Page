const btn= document.querySelector('.burguer-icon');
const menu=document.querySelector('.naviguation')
const choose=document.querySelector('.naviguation a')
const navbar=document.querySelector('nav');


btn.addEventListener('click', ()=>{
    menu.classList.toggle('active') 
    btn.classList.toggle('transformation')
});
choose.forEach(link => {
    link.addEventListener('click',()=>{
        menu.classList.remove('active')
        btn.classList.remove('transformation')
    }) 
});
window.addEventListener('scroll',()=>
{
    menu.classList.remove('active')
    btn.classList.remove('transformation')
})
window.addEventListener('scroll', ()=> {
    menu.classList.remove('active')
    btnBurger.classList.remove('transformation')
})
window.addEventListener('scroll',()=>{
    navbar.classList.toggle('boxshadow',window.scrollY > 0)
})

