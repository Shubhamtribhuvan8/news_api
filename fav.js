import {header,footer} from "./Header_Footer.js"

document.getElementById("nav").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

var arr = JSON.parse(localStorage.getItem("data")) || [];
display(arr);
function display(arr){
    document.getElementById("container").innerHTML="";
    arr.map(function(ele,i){

        document.getElementById("fav").append(`<i class="fa-regular fa-heart"></i>`);
        

        const img = document.createElement("img")
        img.setAttribute("id","image")
        img.src = ele.image;
        document.getElementById("image").append(img);

        const name = document.createElement("h4");
        name.textContent = ele.hotel_name;

        const type = document.createElement("p");
        type.textContent = ele.hotel_apartment;

        const location = document.createElement("p");
        location.textContent = ele.country;


        const rating = document.createElement("p");
        rating.textContent = ele.number + "  " + ele.good_excellent;
        
        var remove = document.createElement("i");
        remove.id = "fav";
        remove.innerHTML = '<i class="fa-regular fa-heart"></i>';
        remove.addEventListener("click", del);
      function del(){
        arr.splice(i,1);
        localStorage.setItem("data",JSON.stringify(arr));
        display(arr);
      }
        document.getElementById("details").append(name , type , location , rating);
    })
}