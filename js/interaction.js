//main javascript file


// used to the place of a db
houses = [
	{
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 200000,
	  "address": "123 abc lane",
	  "city": "wwwwwwww",
	  "state" :"ww",
	  "description":"",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
	{
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "124 abc lane",
	  "city": "wwwwwww",
	  "state": "ww",
	  "description":"",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
  {
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 200000,
	  "address": "125 abc lane",
	  "city": "wwwwww",
	  "state": "ww",
	  "description": "",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
  {
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "126 abc lane",
	  "city": "wwwwwww",
	  "state": "ww",
	  "description": "",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
  {
	  "main_pic" : "./images",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "127 abc lane",
	  "city": "wwwwww",
	  "state":"ww",
	  "description": "",
	  "num_of_rooms": 0,
	  "num_of_bathrooms": 0
	},
	{
	  "main_pic" : "./images/",
	  "inside_pic" : "./images/",
	  "price": 2000000,
	  "address": "128 abc lane",
	  "city": "wwwwwwww",
	  "state":"ww",
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
    house += "<a href='#'><article onClick='' onHover=''><div><img src='"
    +houses[i].main_pic+"'></div><div><p>"+houses[i]["address"]+"</p><p> "
    +houses[i]["city"]+ "</p><p> " +houses[i]["state"]+
    "</p><p>number of bathrooms: "+ houses[i].num_of_bathrooms +
    "</p><p>number of rooms: "+houses[i]["num_of_rooms"]+
    "</p><p>Price: "+houses[i]["price"]+"</p></div></article></a>";
    featureSection.innerHTML = house;
	}
	    featureSection.innerHTML = house;
}

console.log(window)
window.onload = populateFeatureSection;