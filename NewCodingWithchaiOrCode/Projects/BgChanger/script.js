const buttons=document.querySelectorAll('.box');
// console.log(buttons);
buttons.forEach((button)=>{
    button.addEventListener('click',(element)=>{
        document.body.style.backgroundColor = `${element.target.id}`
    })    
})