
// Main code starts here
function openNav() {
    document.getElementById("mySidenav").style.width = "681px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// var data = JSON.parse(localStorage.getItem("surya"));
// console.log(data.start1)
// console.log(data.end1)

//Main
let alldata;
async function load() {
    let res = await fetch("https://vast-gold-panda-sari.cyclic.app/posts");
    let data = await res.json();
    // console.log(data[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items[0].FlightDetails[0].OriginAirportName);
    alldata = data[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items;
    appendData(data[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items);
    // appendData(data[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items)
}
function appendData(dataarr) {
    // console.log()
    let container = document.getElementById("parent");
    container.innerHTML = "";
    dataarr.forEach((ele, index) => {
        let div = document.createElement("div");
        let div0 = document.createElement("div");
        let div1 = document.createElement("div");
        let div12 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
       let div4 = document.createElement("div");
        let filghtdetails = document.createElement("div");
        // let name = document.createElement("p");
        // name.innerText = ele.FlightDetails[0].OriginAirportName;

        let AirlineName = document.createElement("h3");
        AirlineName.innerText = ele.FlightDetails[0].AirlineName;

        let Airlinimg = document.createElement("img");
        Airlinimg.src = "https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg"
        Airlinimg.style.width = "50px";
        Airlinimg.style.height = "52px";


        let Airlinimg1 = document.createElement("img");
        Airlinimg1.src = "https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg"
        Airlinimg1.style.width = "50px";
        Airlinimg1.style.height = "52px";

        let AirlineName1 = document.createElement("h3");
        AirlineName1.innerText = ele.FlightDetails[0].AirlineName;

        let OriginAirportCity = document.createElement("h3");
        OriginAirportCity.innerText = ele.FlightDetails[0].OriginAirportCity;

        let origin = document.createElement("p");
        origin.innerText = ele.FlightDetails[0].Origin;

        let DepartureDateTime = document.createElement("h4");
        DepartureDateTime.innerText = ele.FlightDetails[0].DepartureDateTime;

        let DestinationAirportCity = document.createElement("h3");
        DestinationAirportCity.innerText = ele.FlightDetails[0].DestinationAirportCity;

        let Destination = document.createElement("p");
        Destination.innerText = ele.FlightDetails[0].Destination;

        let ArrivalDateTime = document.createElement("h4");
        ArrivalDateTime.innerText = ele.FlightDetails[0].ArrivalDateTime;
        
        let journey=document.createElement("p");
        journey.innerText="Journey Time";
        journey.style.fontSize="12px";
        

        let x = (ele.FlightDetails[0].ArrivalDateTime);

        let hourx = Number(x[0] + x[1]);
        let minx = Number(x[3] + x[4]);
        let hourx1 = hourx * 60 + minx;
        //  console.log(hourx1);

        let y = (ele.FlightDetails[0].DepartureDateTime);

        let houry = Number(y[0] + y[1]);
        let miny = Number(y[3] + y[4]);
        let houry1 = houry * 60 + miny;
        //  console.log(houry1);

        let timeover = hourx1 - houry1;
        // console.log(timeover);
        let ghanta = ((timeover / 60).toFixed(0) - 1);
        let ghantamin = (timeover % 60);
        // console.log((timeover/60).toFixed(0),(timeover%60));
        let a = document.createElement("p");
        if (ghanta >= 1) {
            a.innerText = ghanta +" H"+ " : " + ghantamin + " M";
            a.style.fontSize = "15px";
            a.style.fontWeight = "bold";
        }
        else {
            a.innerText = ghantamin + " M";
            a.style.fontSize = "15px";
            a.style.fontWeight = "bold";
        }
        let price = document.createElement("h3");
        price.innerText = "₹ " + ele.FareDescription.PaxFareDetails[0].BasicAmount;
        price.style.fontSize = "25px";
        price.style.color = "red";
        let fairy = document.createElement("P");
        fairy.textContent = "EasyMyTrip";
        fairy.style.fontWeight = "bold";
        fairy.style.fontSize = "15px";

        let viewdeal = document.createElement("button");
        viewdeal.textContent = "View Deal";
        viewdeal.style.padding = " 9px 30px 11px";
        viewdeal.style.backgroundColor = "red";
        viewdeal.style.color = "white";
        viewdeal.style.borderRadius = "7px";
        viewdeal.style.fontWeight = "bold";
        viewdeal.style.cursor = "point"

        let line1 = document.createElement("span");
        line1.innerHTML = "&#8651";
        line1.style.content = "\21CB";
        line1.style.fontSize = "70px";

        let jorneyicon = document.createElement("span");
        jorneyicon.innerHTML = "&#8621";
        jorneyicon.style.content = "\21AD";
        jorneyicon.style.fontSize = "56px";
        jorneyicon.style.color="violet";
        
        let linename = document.createElement("p");
        linename.textContent = "Direct";
        linename.style.fontSize = "20px"


        var myParent = document.body;
        var array = [" * Travel smart. This airline is offering additional flexibility & safety measures."," 1) Pre-flight temperature check or thermal screening.", " 2) Pre-flight cleaning, installation of cabin HEPA filters.", " 3) Masks required on board, masks provided."];
        var selectList = document.createElement("select");

        selectList.id = "mySelect";
        myParent.appendChild(selectList);
        
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            selectList.appendChild(option);
        }
        
        selectList.style.width="660px";
        selectList.style.fontSize="15px";
        selectList.style.textAlign="center";
        selectList.style.border="thick";
        selectList.style.border="thick";
        selectList.style.height="44px";
        selectList.style.fontFamily="system-ui";
        
        // let Alert=document.createElement("p");
        // Alert.innerText="Alert ishgj dhdjgdgdgd";

        div0.append(Airlinimg, AirlineName, Airlinimg1, AirlineName1);
        div1.append(OriginAirportCity, origin, DepartureDateTime);
        div12.append(line1, linename,jorneyicon,journey,a);
        div2.append(DestinationAirportCity, Destination, ArrivalDateTime);
        div3.append(price, fairy, viewdeal);
        div4.append(selectList);
        div.append(div0, div1, div12, div2, div3);
        div.setAttribute("class", "card");
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        container.append(div,div4);
    });
}
load();

//Sort By filter low to high //chepest
document.getElementById("sortbyprice1btn").addEventListener("click", function () {
    sortbyprice(alldata);
});
function sortbyprice(alldata) {
    // ele.FareDescription.PaxFareDetails[0].BasicAmount
    alldata = alldata.sort((a, b) => {
        // console.log(a.FareDescription.PaxFareDetails[0].BasicAmount);
        return Number(a.FareDescription.PaxFareDetails[0].BasicAmount) - Number(b.FareDescription.PaxFareDetails[0].BasicAmount);
    });
    appendData(alldata);
}
//Sort By filter High to Low //Quickset
document.getElementById("sortbyprice2btn").addEventListener("click", function () {
    sortbyprice2(alldata);
});
function sortbyprice2(alldata) {
    // ele.FareDescription.PaxFareDetails[0].BasicAmount
    alldata = alldata.sort((a, b) => {
        // console.log(a.FareDescription.PaxFareDetails[0].BasicAmount);
        return Number(b.FareDescription.PaxFareDetails[0].BasicAmount) - Number(a.FareDescription.PaxFareDetails[0].BasicAmount);
    });
    // console.log(alldata);
    appendData(alldata);
    //   console.log(alldata);
}






// Search city
// Example usage: search for the city "Seattle"
// searchCity(city)bOX 1;

const form1 = document.querySelector('#search-form');
const input1 = document.querySelector('#search-input');
form1.addEventListener('ontype()', event => {
    event.preventDefault();
    // console.log(input1.value);
     searchCity1(input1.value);
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
           
            // console.log(data[0].OneWayAvailabilityResponse.ItinearyDetails[0].Items);
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

form2.addEventListener('ontype()', event => {
    event.preventDefault();
    searchCity2(input2.value);
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
        var x = document.createElement("input");
        x.setAttribute("type", "checkbox");
        //   if(OriginAirportCity1==city){
        div.append(OriginAirportCity1, x);
        div.style.display = "flex";
        div.style.width = "136px";
        div.style.justifyContent = "space-between";
        div.style.gap = "45px";
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
document.getElementById("search-input1").addEventListener("input", function () {
    getdata(obj)
})

document.getElementById("search-input").addEventListener("input", function () {
    getdata2(obj)
})

document.getElementById("start").addEventListener("input", function () {
    getdata3(obj)
})

document.getElementById("end").addEventListener("input", function () {
    getdata4(obj)
})

var obj = {
    start1: "",
    end1: "",
    startdate: "",
    enddate: "",
}

function getdata(obj) {
    let x = document.getElementById("search-input1").value;
    obj.end1 = x;
    console.log(obj);
}


function getdata2(obj) {
    let y = document.getElementById("search-input").value;
    obj.start1 = y;
    console.log(obj);
}

function getdata3(obj) {
    let z = document.getElementById("start").value;
    obj.startdate = z;
    console.log(obj);
}

function getdata4(obj) {
    let a = document.getElementById("end").value;
    obj.enddate = a;
    console.log(obj);
    //    arr.push(obj);
    localStorage.setItem("surya", JSON.stringify(obj));
    document.getElementById("Search").addEventListener("click", redirectFunction);
    function redirectFunction() {
        window.location.href = "allflight.html";
    }
}
