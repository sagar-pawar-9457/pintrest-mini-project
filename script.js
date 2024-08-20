let data = [
    {name : "indian flag" , image: "https://images.unsplash.com/flagged/photo-1566192215649-67347425f492?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : " farmer" , image: "https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "army" , image: "https://images.unsplash.com/photo-1585802540745-bb23da2d6246?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "airforce" , image: "https://plus.unsplash.com/premium_photo-1661962873161-810c049337f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "cammando" , image: "https://images.unsplash.com/photo-1518719389402-b6beb27e88c2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "police" , image: "https://images.unsplash.com/photo-1604230941771-b2fc3d715f66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
let clutter = "";
function showData (){
    data.forEach(function(obj){
        clutter += `<div class="box">
                        <img class="cursor-pointer" src="${obj.image}" alt= "image">
                        <div class="caption">Lorem ipsum </div>
                    </div>`
    })
    let container = document.querySelector(".container")
    container.innerHTML = clutter  
}
function handleClick (){
   let input = document.querySelector("#searchinput");

   input.addEventListener("focus",function(){
     document.querySelector(".overlay").style.display = "block"
    
   })

   
   input.addEventListener("blur",function(){
     document.querySelector(".overlay").style.display = "none"
    
   })

   
   input.addEventListener("input",function(){
       const filteredArray = data.filter(obj => obj.name.toLowerCase().startsWith(input.value));
       var clutter = "";
       filteredArray.forEach(function(obj){
        clutter += `<div class="res flex px-8 py-3">
                    <i class="ri-search-line font-semibold mr-5"></i>
                    <h3 class="font-semibold">${obj.name}</h3>
                </div>`
       })
       document.querySelector(".searchdata").style.display= "block";
       document.querySelector(".searchdata").innerHTML = clutter;
   })
}
handleClick();
showData();