var button=document.querySelector(".button")

button.addEventListener("click",function(){
    window.location.href="index.html"
})
function addname(){
    var users=JSON.parse(localStorage.getItem("users"))
    
    for(var i=0;i<users.length;i++){
        var divv=document.querySelector(".h1")
        divv.innerHTML=`hello ${users[i]["name"]}`
    }
 
}
addname();





