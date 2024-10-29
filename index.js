let a=document.querySelector('#screen')
let b=document.querySelector('#submit')
let c=document.querySelector('ul')
let d=document.querySelector('#delete')
let e=document.querySelector('#div')
e.style.height='90px'


b.addEventListener('click',()=>{
  if(a.value==' '){
    alert("please enter item to add")
   }else{
    
    let  p=document.createElement('p')
    c.appendChild(p)
    p.setAttribute('class','san')
    p.style.textDecoration='none'
     p.textContent=a.value
    
     a.value=' '
     
     p.style.fontSize='20px'
     e.style.height='100%'
   
  



   
    
     
     
     p.style.fontSize='20px'
     e.style.height='100%'
    }
  })
  
  d.addEventListener('click',()=>{
    c.innerHTML=' '
    a.value=' '
  })
  
  
  

  
  
   

