
//Main code starts here
function openNav() {
    document.getElementById("mySidenav").style.width = "681px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Search city
// Example usage: search for the city "Seattle"
// searchCity(city)bOX 1;

const form1 = document.querySelector('#search-form');
const input1 = document.querySelector('#search-input');
form1.addEventListener('ontype()', event=> {
    event.preventDefault();
    let a=searchCity1(input1.value);
});

function searchCity1(city) {
    const endpoint = 'https://vast-gold-panda-sari.cyclic.app/posts';
    const params = {
        city: city,
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoint}?${queryString}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Do something with the search results
            appendData1(data[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items);
        })
        .catch(error => {
            // Handle any errors that occurred during the search
            console.error(error);
        });
}
function appendData1(dataarr) {
    document.getElementById("box").innerText = "";
    let container = document.getElementById("box");
    dataarr.forEach((ele) => {
        let div = document.createElement("div");
        let OriginAirportCity1 = document.createElement("h3");
        OriginAirportCity1.innerText = ele.FlightDetails[0].OriginAirportCity;

        //   if(OriginAirportCity1==city){
        div.append(OriginAirportCity1);
        container.append(div);
    })
}
function function1() {
    document.getElementById("box").style.display = "none";
}
var id;
function debounce() {
    document.getElementById("box").style.display = "block";
    if (id) {
        clearInterval(id);
    }
    id = setTimeout(function () {
        searchCity1();
    }, 500);
}
document.getElementById("search-input").addEventListener("input", debounce);


// sEARCH BOX 2

const form2 = document.querySelector('#search-form1');
const input2 = document.querySelector('#search-input1');

form2.addEventListener('submit', event => {
    event.preventDefault();
   let b= searchCity2(input2.value);
//    console.log(b)
});

function searchCity2(city) {
    const endpoint = 'https://vast-gold-panda-sari.cyclic.app/posts';
    const params = {
        city: city,
    };
  
    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoint}?${queryString}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Do something with the search results
            appendData2(data[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items);
        })
        .catch(error => {
            // Handle any errors that occurred during the search
            console.error(error);
        });
}


function appendData2(dataarr) {
    document.getElementById("box1").innerText = "";
    let container = document.getElementById("box1");
    dataarr.forEach((ele) => {
        let div = document.createElement("div");
        let OriginAirportCity1 = document.createElement("h3");
        OriginAirportCity1.innerText = ele.FlightDetails[0].OriginAirportCity;
        //   if(OriginAirportCity1==city){
        div.append(OriginAirportCity1);
        container.append(div);
    })
}
function function1() {
    document.getElementById("box1").style.display = "none";
}

var id;
function debounce() {
    document.getElementById("box1").style.display = "block";
    if (id) {
        clearInterval(id);
    }
    id = setTimeout(function () {
        searchCity2();
    }, 500);
}
document.getElementById("search-input1").addEventListener("input", debounce);

//input data
document.getElementById("search-input1").addEventListener("input",function(){
    getdata(obj)
})

document.getElementById("search-input").addEventListener("input",function(){
    getdata2(obj)
})

document.getElementById("start").addEventListener("input",function(){
    getdata3(obj)
})

document.getElementById("end").addEventListener("input",function(){
    getdata4(obj)
})

var obj={
    start1:"",
    end1:"",
    startdate:"",
    enddate:"",
}

function getdata(obj){
   let x= document.getElementById("search-input1").value;
   obj.end1=x;
console.log(obj);
}


function getdata2(obj){
    let y= document.getElementById("search-input").value;
    obj.start1=y;
   console.log(obj);
 }

 function getdata3(obj){
   let z= document.getElementById("start").value;
   obj.startdate=z;
   console.log(obj);
}

function getdata4(obj){
    let a= document.getElementById("end").value;
   obj.enddate=a;
   console.log(obj);
//    arr.push(obj);
   localStorage.setItem("surya",JSON.stringify(obj));
   document.getElementById("Search").addEventListener("click", redirectFunction);
        function redirectFunction(){
        window.location.href = "allflight.html";
    }
 }