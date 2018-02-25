//main javascript file


// used to the place of a db
houses = [
	{
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 200000,
	  "address": "123 abc lane",
	  "city": "",
	  "state" :"",
	  "description":"",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
	{
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "124 abc lane",
	  "city": "",
	  "state": "",
	  "description":"",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
  {
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 200000,
	  "address": "125 abc lane",
	  "city": "",
	  "state": "",
	  "description": "",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
  {
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "126 abc lane",
	  "city": "",
	  "state": "",
	  "description": "",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
  {
	  "main_pic" : "./images",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "127 abc lane",
	  "city": "",
	  "state":"",
	  "description": "",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
	{
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "128 abc lane",
	  "city": "",
	  "state":"",
	  "description": "",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	}
]

function populateFeatureSection(){
	// populates the feature section on the home page
  let house = "";
	let featureSection = document.getElementById("featureSection");
  let array_length = houses.length-1;
	for(let i = 0; i < array_length; i++){
    house += "<a href='#'><article onClick='' onHover=''><img src='"
    +houses[i].main_pic+"'>"+houses[i]["address"]+" , "
    +houses[i]["city"]+ ", " +houses[i]["state"]+
    "number of bathrooms: "+ houses[i].num_of_bathrooms +
    "number of rooms: "+houses[i]["num_of_rooms"]+
    "<p>Price: "+houses[i]["price"]+"</p></article></a>";
    featureSection.innerHTML = house;
	}
	    featureSection.innerHTML = house;
}

console.log(window)
window.onload = populateFeatureSection;