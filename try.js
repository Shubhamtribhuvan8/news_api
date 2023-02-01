var locaData = JSON.parse(localStorage.getItem("trivago")) || [];
let searchData= localStorage.getItem("data");
let search = searchData;


//  ghjk

var items = [
  {
    id: 1,
    image:
      " https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/31/70/3170860_v2.jpeg",
    hotel_name: "Holiday Inn Chennai City Centre Hotel",
    hotel_apartment: "Hotel",
    Address: "6.2 km to City center",
    number: 8.0,
    good_excellent: "good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹3,86,120",
    price: 12455,
    country: "chennai",
    latitude: 13.033675760623233,
    longitude: 80.05215162411332
  },
  {
    id: 2,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/51/66/5166516_v2.jpeg",
    hotel_name: "Regenta Central, Chennai",
    hotel_apartment: "Entire House / Apartment",
    Address: "4.2 km to City center",
    number: 9.0,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹43,320",
    price: 3931,
    country: "chennai",
    latitude: 12.794251484125862,
    longitude: 80.22302074357867
  },
  {
    id: 3,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/50/75/5075390.jpeg ",
    hotel_name: "FabExpress Travelers Inn Nirman Nagar",
    hotel_name: "Hotel",
    Address: "3.5 km to City center",
    number: 7.5,
    good_excellent: "good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹47,320",
    price: 2931,
    country: "chennai",
    latitude: 13.025114510527914,
    longitude: 80.22878279909492
  },
  {
    id: 4,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/20/38/2038649_v1.jpeg ",
    hotel_name: "FabHotel The Lodge Bani Park",
    hotel_apartment: "Hotel",
    Address: "4.8 km to City center",
    number: 9.2,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹123,320",
    price: 3431,
    country: "chennai",
    latitude: 13.022592110955353,
    longitude: 80.18440062180161
  },
  {
    id: 5,
    image:
      " https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/53/99530_v4.jpeg",
    hotel_name: "Treebo Trend Natraj",
    hotel_apartment: "Hotel",
    Address: "5.6 km to City center",
    number: 8.5,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹49,320",
    price: 1931,
    country: "chennai",
    latitude: 12.976256592008259,
    longitude: 80.25144813582301
  },
  {
    id: 6,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/49/86/4986586_v2.jpeg",
    hotel_name: "Sneh Deep Guest House",
    hotel_apartment: "Entire House / Apartment",
    Address: "2.5 km to City center",
    number: 8.8,
    good_excellent: "good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹42,320",
    price: 5931,
    country: "chennai",
    latitude: 13.022592110955353,
    longitude: 80.18440062180161
  },
  {
    id: 7,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/12/991263_v3.jpeg ",
    hotel_name: "Taj Inn",
    hotel_apartment: "Hotel",
    Address: " 3.5 km to City center",
    number: 8.5,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹19,320",
    price: 6931,
    country: "chennai",
    latitude: 12.976058929770568,
    longitude: 80.25868574157357
  },
  {
    id: 8,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/33/58/3358312_v5.jpeg ",
    hotel_name: "Lemon Tree Premier Jaipur",
    hotel_apartment: "Hotel",
    Address: "2.8 km to City center",
    number: 9.5,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹3,95,320",
    price: 5131,
    country: "chennai",
    latitude: 13.076027139121067,
    longitude: 80.2136323414743
  },
  {
    id: 9,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/73/66/7366588.jpeg ",
    hotel_name: "Mayaa Mansion",
    hotel_apartment: "Hotel",
    Address: "1.5 km to City center",
    number: 9.4,
    good_excellent: "good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹55,320",
    price: 783,
    country: "chennai",
    latitude: 13.050398867730518,
    longitude: 80.24875720962882
  },
  {
    id: 10,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/31/82/3182850_v1.jpeg ",
    hotel_name: "Man Sagar",
    hotel_apartment: "Entire House / Apartment",
    Address: "2.2 km to City center",
    number: 8.6,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹62,320",
    price: 3931,
    country: "chennai",
    latitude: 13.029121170218943,
    longitude: 80.17792275175452
  },

  {
    id: 11,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/22/15/2215962_v3.jpeg ",
    hotel_name: "Holiday Inn Mumbai Internation",
    hotel_apartment: "Hotel",
    Address: "3.4 km to Bandra west",
    number: 7.9,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹92,320",
    price: 3100,
    country: "mumbai",
    latitude: 19.115261372727765,
    longitude: 72.83551337197423
  },
  {
    id: 12,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/21/08/2108550_v1.jpeg ",
    hotel_name: "InterContinental Marine Drive-Mumbai",
    hotel_apartment: "Hotel",
    Address: "6.2 km to City center",
    number: 8.9,
    good_excellent: "good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹77,320",
    price: 3200,
    country: "mumbai",
    latitude: 19.1239608195811,
    longitude: 72.8911410458386
  },
  {
    id: 13,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/14/55/1455487_v4.jpeg ",
    hotel_name: "Hotel Bawa Suites",
    hotel_apartment: "Hotel",
    Address: "2.2 km to City center",
    number: 9.3,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹89,320",
    price: 7931,
    country: "mumbai",
    latitude: 19.05032261097757,
    longitude: 73.0818953923881
  },
  {
    id: 14,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/94/93/949345_v3.jpeg ",
    hotel_name: "Ramee Guestline Hotel Khar",
    hotel_apartment: "Entire House / Apartment",
    Address: "5.2 km to City center",
    number: 8.6,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹33,320",
    price: 6781,
    country: "mumbai",
    latitude: 19.1023753,
    longitude: 72.8461937
  },
  {
    id: 15,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/11/14/1114845_v1.jpeg ",
    hotel_name: "Shubhangan Hotel",
    hotel_apartment: "Entire House / Apartment",
    Address: "5.2 km to City center",
    number: 4,
    good_excellent: "good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹1,12,988",
    price: 4781,
    country: "mumbai",
    latitude: 19.115261372727765,
    longitude: 72.83551337197423
  },
  {
    id: 16,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/26/62/2662524_v2.jpeg ",
    hotel_name: "Hotel Singhs International ",
    hotel_apartment: "Hotel",
    Address: "3.2 km to City center",
    number: 9.0,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹47,320",
    price: 3781,
    country: "mumbai",
    latitude: 19.1239608195811,
    longitude: 72.8911410458386
  },
  {
    id: 17,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/12/52/12520470.jpeg ",
    hotel_name: "Holiday Inn Mumbai International Airport",
    hotel_apartment: "Hotel",
    Address: "2.2 km to City center",
    number: 10,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "68,678",
    price: 6781,
    country: "mumbai",
    latitude: 19.05032261097757,
    longitude: 73.0818953923881
  },
  {
    id: 18,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/17/33/17334832_v1.jpeg ",
    hotel_name: "The UniContinental Hotel",
    hotel_apartment: "Hotel",
    Address: "4.2 km to City center",
    number: 9.6,
    good_excellent: "good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹57,320",
    price: 4781,
    country: "mumbai",
    latitude: 19.1023753,
    longitude: 72.8461937
  },
  {
    id: 19,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/31/46/3146982_v3.jpeg ",
    hotel_name: "Hotel Lucky",
    hotel_apartment: "Entire House / Apartment",
    Address: "1.2 km to City center",
    number: 8.2,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹67,320",
    price: 6781,
    country: "mumbai",
    latitude: 19.115261372727765,
    longitude: 72.83551337197423
  },
  {
    id: 20,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/19/42/1942097_v1.jpeg ",
    hotel_name: "Golden Galaxy",
    hotel_apartment: "Hotel",
    Address: "4.2 km to City center",
    number: 10,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹47,320",
    price: 4781,
    country: "mumbai",
    latitude: 19.1239608195811,
    longitude: 72.8911410458386
  },

  {
    id: 21,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/12/58/1258160_v3.jpeg ",
    hotel_name: "Holiday Inn New Delhi Int'l ",
    hotel_apartment: "Hotel",
    Address: "1.2 km to City center",
    number: 7.9,
    good_excellent: "good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹97,320",
    price: 2781,
    country: "delhi",
    latitude: 28.58817,
    longitude: 77.16893
  },
  {
    id: 22,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/48/99481_v10.jpeg ",
    hotel_name: "Crowne Plaza New Delhi M",
    hotel_apartment: "Hotel",
    Address: "0.2 km to City center",
    number: 9.3,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹27,320",
    price: 1981,
    country: "delhi",
    latitude: 28.68366,
    longitude: 77.19889
  },
  {
    id: 23,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/14/89/1489067_v2.jpeg ",
    hotel_name: "Capital O 14768 The Grand",
    hotel_apartment: "Entire House / Apartment",
    Address: "3.2 km to City center",
    number: 8.2,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹1,47,320",
    price: 6781,
    country: "delhi",
    latitude: 28.58747,
    longitude: 77.16938
  },
  {
    id: 24,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/11/97/1197952_v3.jpeg",
    hotel_name: "Bajrang Guest House",
    hotel_apartment: "Hotel",
    Address: "1.2 km to City center",
    number: 9.5,
    good_excellent: "good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹67,320",
    price: 4781,
    country: "delhi",
    latitude: 28.634895,
    longitude: 77.276037
  },
  {
    id: 25,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/47/99471_v1.jpeg ",
    hotel_name: "Grand Lawson New Delhi ",
    hotel_apartment: "Hotel",
    Address: "3.2 km to City center",
    number: 9.7,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹35,320",
    price: 1551,
    country: "delhi",
    latitude: 28.63496,
    longitude: 77.28191
  },
  {
    id: 26,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/30/45/3045898_v4.jpeg ",
    hotel_name: "FabHotel Olivia Suite New ",
    hotel_apartment: "Hotel",
    Address: "4.2 km to City center",
    number: 10,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "₹1,67,320",
    price: 4781,
    country: "delhi",
    latitude: 28.63468,
    longitude: 77.27677
  },
  {
    id: 27,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/53/99530_v4.jpeg ",
    hotel_name: "OYO 8462 Hotel Galaxy",
    hotel_apartment: "Entire House / Apartment",
    Address: "8.2 km to City center",
    number: 8.2,
    good_excellent: "good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹46,320",
    price: 5231,
    country: "delhi",
    latitude: 28.63635,
    longitude: 77.27888
  },
  {
    id: 28,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/92/98/929877_v2.jpeg",
    hotel_name: "The Park New Delhi",
    hotel_apartment: "Entire House / Apartment",
    Address: "5.7 km to City center",
    number: 9.3,
    good_excellent: "Excellent",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "56,678",
    price: 3781,
    country: "delhi",
    latitude: 28.58747,
    longitude: 77.16938
  },
  {
    id: 29,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/98/85/9885320_v2.jpeg",
    hotel_name: "Hotel Lloyd Residency",
    hotel_apartment: "Hotel",
    Address: "4.2 km to City center",
    number: 7.6,
    good_excellent: "Very Good",
    Agoda_Makemytrip: "Agoda",
    price_31nights: "₹49,320",
    price: 2781,
    country: "delhi",
    latitude: 28.63635,
            longitude: 77.27888
  },
  {
    id: 30,
    image:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/21/05/2105938_v1.jpeg",
    hotel_name: "FabHotel Prime Jasmine Bo",
    hotel_apartment: "Hotel",
    Address: "5.2 km to City center",
    number: 8.6,
    good_excellent: "good",
    Agoda_Makemytrip: "Makemytrip",
    price_31nights: "18,789",
    price: 1999,
    country: "delhi",
    latitude: 28.58778,
    longitude: 77.17008
  },
];
let alldata;
let funto = () => {
  localStorage.setItem("trivago", JSON.stringify(items));
  // console.log(items)
  inputSearch(locaData);
};

// //code to append
// function disp(data) {
//   let search = document.getElementById("search").value;
//   //displayData(data,search);
// }

//code to append the data

function displayData(data, cityName) {
  console.log(cityName);
  alldata=data;
  document.getElementById("container").innerHTML = "";

  let container = document.querySelector("#container");
  // container.innerHTML=""
  data.forEach((ele) => {
    // console.log(ele.price)
    let div = document.createElement("div");
    div.setAttribute("id", "three");
    let div1 = document.createElement("div");
    div1.setAttribute("id", "three1");
    let img = document.createElement("img");
    img.src = ele.image;

    let div2 = document.createElement("div");
    div2.setAttribute("id", "three2");
    let hotelName = document.createElement("h2");
    hotelName.textContent = ele.hotel_name;

    let hotelApart = document.createElement("p");
    hotelApart.textContent = ele.hotel_apartment;

    let address = document.createElement("p");
    address.textContent = ele.Address;
    let radiv = document.createElement("div");
    radiv.setAttribute("id", "radiv");
    let rating = document.createElement("p");
    rating.textContent = ele.number;
    let heart = document.createElement("div");
    heart.innerHTML =  `<i class="bi bi-heart"></i>`;
   heart.setAttribute("id","heartid")

  //  document.getElementById("heartid").addEventListener("click",function(){
    // localStorage.setItem("fav",JSON.stringify(arr));
    // location.href="heart.html"
  //  })

    let good = document.createElement("h4");
    good.textContent = ele.good_excellent;

    let div3 = document.createElement("div");
    div3.setAttribute("id", "three3");
    let div31 = document.createElement("div");
    div31.setAttribute("id", "ruby");

    let agoda = document.createElement("p");
    agoda.textContent = ele.Agoda_Makemytrip;

    let freeCancellation = document.createElement("p");
    freeCancellation.textContent = "Free cancellation";
    let price31Night = document.createElement("p");
    price31Night.textContent = "31 nights for" + ele.price_31nights;

    let div311 = document.createElement("div");
    div311.setAttribute("id", "three311");
    let price = document.createElement("h2");
    price.textContent ="₹"+ ele.price;

    let viewDeal = document.createElement("button");
    viewDeal.textContent = "View Deal";

    let div32 = document.createElement("div");
    let ourLowestPrice = document.createElement("p");
    ourLowestPrice.textContent = "Our Lowest Price:"+"  ₹"+ele.price

    // let div321 = document.createElement("div");
    // div321.setAttribute("id", "three321");
    let agoda1 = document.createElement("p");
    agoda1.textContent = ele.Agoda_Makemytrip;

    // let price1 = document.createElement("h4");
    // price1.textContent = "₹"+ele.price;
 

    div32.append(ourLowestPrice, agoda1);
    div31.append(agoda, freeCancellation, price31Night, div311);
    div3.append(div31, div32);
    div311.append(price, viewDeal);
    radiv.append(rating,heart)
    div2.append(hotelName, hotelApart, address, radiv,good);

    div1.append(img);
    div.append(div1, div2, div3);
    div.addEventListener("click", function () {
      getWeather(data, ele.longitude, ele.latitude);
    });
    container.append(div);
    data1=container


    ////map
     var map = document.getElementById("gmap_canvas");
     map.src = `https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

     async function getWeather(items, long, lat) {
       var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2b231bae54b7abcb70f298ce8f585aea`;

       try {
         var weatherdata = await fetch(url);
         var data = await weatherdata.json();
         console.log(data);
         displayData(items, data.name);
         alldata=items;
       } catch (e) {
         console.log(e);
       }
     }
   
   
  });

}

//code for appending map
function map(cityName) {
 
}

//code by himanshumishra///

//filtering the data with the hep of search input

//inputSearch(locaData,search);
let data1;

  
  console.log(searchData);
// inputSearch(locaData);
function inputSearch(locaData) {
  search =searchData;
  // search=localStorage.getItem("data");
  console.log(search)
  data1 = locaData.filter((ele) => ele.country === search);
  console.log(search);
  displayData(data1, search);
}
// Low to High
document.getElementById("sort").addEventListener("click", function () {
  sortbyprice(alldata);
});
function sortbyprice(alldata) {
  console.log(alldata)
  // ele.FareDescription.PaxFareDetails[0].BasicAmount
  alldata = alldata.sort((a, b) => {
      // console.log(a.FareDescription.PaxFareDetails[0].BasicAmount);
      return a.price-b.price;
  });
  displayData(alldata);
}
// High to Low
document.getElementById("sort1").addEventListener("click", function () {
  sortbyprice1(alldata);
});
function sortbyprice1(alldata) {
  console.log(alldata)
  // ele.FareDescription.PaxFareDetails[0].BasicAmount
  alldata = alldata.sort((a, b) => {
      // console.log(a.FareDescription.PaxFareDetails[0].BasicAmount);
      return b.price-a.price;
  });
  displayData(alldata);
}


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("up");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
