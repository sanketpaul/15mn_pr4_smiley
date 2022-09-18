let a1=document.getElementById('a1')
let a2=document.getElementById('a2')

a1.addEventListener('click',(e)=>{
    a1.style.display='none'
    a2.style.display='block'
})
a2.addEventListener('click',(e)=>{
    a1.style.display='block'
    a2.style.display='none'
})