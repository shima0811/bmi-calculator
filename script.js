let _btn = document.getElementById("calculat")
console.log(_btn)

_btn.addEventListener("click", function(){
    let _h=document.getElementById("height").value
    let _w=document.getElementById("weight").value
    if(_h==""||_w==""){
        alert("please fill out input fields!")
        return;
    }

    _h=_h/100
  let bcounter=0 
    let bmi=(_w /(_h*_h))
    bmi=bmi.toFixed(2)
    count=setInterval(counter,70)
    function counter(){
        if(bcounter < bmi){
            document.querySelector("#result").innerHTML=bcounter
            bcounter+=0.5
        }
        if(bcounter>bmi){
            document.querySelector("#result").innerHTML=bmi
            clearInterval(count)
            document.querySelector(".comment").innerHTML="comment: you are <span id='comment'>"+ status+"</span>"
        }
    }
    let status=""
    if(bmi <18.5){
        status="underweight"
    }
    if(bmi >=18.5 && bmi<25){
        status="healthy"
    }
    
    if(bmi >=25 && bmi<30){
        status="overweight"
    }
    
    if(bmi >=30){
        status="Obese"
    }
    
})