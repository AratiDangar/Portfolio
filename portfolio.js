console.log("script running......")
document.querySelector('.canc').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.canc').style.display='none'
    }
    else{
       setTimeout(()=>{
        document.querySelector('.canc').style.display='inline'
    },200);
         document.querySelector('.ham').style.display='none'
    }
})
