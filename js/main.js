//Here we fill the main <div> in the product.html page with the product info. First the function grabs the target div by its id, "display-case". Then it is scrubbed of child nodes. The for loop appends a child div to 'display-case', then fills it 
function fillDOM(dataArray) {

	var target = document.getElementById("display-case");

	//We scrub the parent node
	while (target.hasChildNodes() ){
		target.removeChild(target.childNodes[0]);
	}

	//run through product Objects in array 'dataArray'
	for (var i= 0; i< dataArray.length; i++ ){
		target.appendChild(document.createElement("P"));
		let contentNow = dataArray[i];
		let elementNow = target.childNodes[i];
		elementNow.setAttribute("class", "product-body");

		//grab names of product properties
		var keys = Object.keys(contentNow);

		//fill product's <p> element with the relevant information
		for (var i= 0; i< keys.length; i++) {
			//'productInfo' will be the string that fills the <p>.
			var productInfo = "";
			//'prop' is the string that is the name of the specific product information we are inserting
			var prop = keys[i];
			
			//We create an image element and set the image source when we come to the last property.
			if (i === 3) {
				var imageElement = document.createElement("IMG");
				target.insertBefore(imageElement, elementNow);
				console.log(prop, contentNow[prop]);
				imageElement.setAttribute("src", contentNow[prop]);
				imageElement.setAttribute("class", "product-image");
				console.log(imageElement);
				elementNow.innerHTML = productInfo;
				break;
			}
			productInfo += prop + ": " + contentNow[prop] + "\n";
		}
	}
}


//This function isn't strictly necessary, as the product data is 
//already sorted in productObj, and the DOM is filled from index 0 
//upwards. However, this function will place any product adjacent in 
//the DOM with another product of its category. "category" is a 
//property of each object, and the name of the category is an 
//integer.
//
//It's being kind of a nuisance, so I'm gonna just comment it out...
//
// function sort(contentNow, elementNow, index, target, dataArray){
// 	// console.log(contentNow.category);
// 	if (target[index-1] > -1)
		
// 		console.log(contentNow.category !== dataArray[index-1].category);

// 	if (target[index-1] 
// 		&& 
// 		contentNow.category !== contentNow[index-1].category ){

// 		for (let i= index; i< elementNow.parentNode.childNodes.slice[0, index+1]; i++ ){
// 			var toPlace = contentNow[index].category;
// 			var toCompare = contentNow[index-i].category;

// 			if ( toPlace === toCompare ){
// 				toCompare.append(toPlace);
// 				break;
// 			}
// 		} 
// 	} else {
// 		;
// 	}
// }


var productObj = {
	
	petalCastle: {
		name: "Petal Castle", 
		description: "Enjoy two magnificent buildings wrapped in 65 secluded acres at our Bed and Breakfast in Michigan. Experience romantic getaways in Michigan like never before. Our inn features 10 rooms or suites with Whirlpool tubs and fireplaces, king or queen sized beds, and private baths with all the amenities a discriminating guest appreciates. Every stay in our Allegan, Michigan bed and breakfast includes full gourmet breakfast; cable TV/DVD, FREE WiFi; private lake and pond with complimentary use of kayaks and paddle boat or snowshoes on site; screened gazebo and porch; walking trails through wooded estate; on-site spa for couple’s side by side massages, pedicures, manicures, and facials in a beautiful natural setting at our Michigan Inn and Spa. Join us for your romantic getaways in Michigan.", 
		price: "$32", 
		img: 'images/product-data/romantic/petal-castle.jpg'
	},
	tunnelOfLove: {
		name: "Love Tunnel", 
		description: "Almost everyone agrees, for example, that there’s a certain romance to being near the ocean. And there are plenty of places to make those magical sunset beach strolls happen—like the South Pacific island of Bora Bora, where resorts have thatch-roofed bungalows set on stilts over crystal-blue lagoons, and where the powdery sand stretches for miles. Even for couples who worry about sunburn or who hate the feel of sand between their toes, smelling the salt air and watching seabirds dive from the deck of a tiny ferryboat—like on the ride across Puget Sound to Whidbey Island, just off the coast of Washington state—can be pretty dreamy.", 
		price: '$14', 
		img: 'images/product-data/romantic/Funland_Tunnel_of_Love.png'
	},
	mapleHill: {
		name: "Maple Hill", 
		description: 'This home was picked up and moved in early 2013, to a spot some six miles away from its original location. The man who had purchased the land and house wanted to tear it down and build a new home on the spot, so a preservationist purchased the house alone from him and moved it a few miles down the road. It is alleged to be haunted by residual energy from previous owners, who, later in life committed suicide. Whether the energy stayed in the old spot or moved on with the house is as yet to be determined.',
		price: "$8,222",
		img: 'images/product-data/haunted/maple-hill-manor.jpg'
	},
	hauntedHouse: {
		name: 'THE VILLISCA AXE MURDER HOUSE', 
		description: 'On a quiet residential street in this small town sits an old white frame house. On a dark evening, the absence of lights and sounds are the first indication to visitors that this house is different from the other homes that surround it. Upon closer inspection, you\'ll notice her doors and windows are tightly closed and covered. An outhouse in the backyard suggests that this house does not occupy a place in the 21st century but somehow belongs in another era or another story. A weather-beaten sign warns rather than welcomes. This is the "Murder House".', 
		price: '$10,000,000', 
		img: 'images/product-data/haunted/haunted-house.jpg'
	},
	dasBoot: { 
		name: 'Das Boot',
		description: 'It is 1942 and the German submarine fleet is heavily engaged in the so-called "Battle of the Atlantic" to harass and destroy British shipping. With better escorts of the Destroyer Class, however, German U-Boats have begun to take heavy losses. Relive the horror of war on this lifelike submarine simulation!',
		price: '$10,000',
		img: 'images/product-data/watery/das-boot.jpg'
	},
	bioSphere: { 
		name: 'Biosphere',
		description: 'Are you a loser who is doing nothing with your life? Is your significant other actively involved in saving the environment, but you couldn\'t care less about saving the Earth? Come to Bio-Dome, where you must learn how to protect the Earth and help your significant other complete her mission! Oh, and you have to stay for a year!',
		price: '$8,000',
		img: 'images/product-data/watery/biosphere.jpg'
	},
	northPole: { 
		name: 'North Pole',
		description: 'Imagine standing at the top of the Earth, glass of champagne in hand – and everywhere you look is south. That is the essence of the 14-day North Pole: The Ultimate Arctic Adventure aboard 50 Years of Victory, the most powerful nuclear icebreaker in the world. Crush through multiyear ice on the Arctic Ocean, sightsee by helicopter on the lookout for walruses, seals, whales, and polar bears, or take a tethered hot-air balloon ride at 90º N, weather permitting. Possible stops at the island of Franz Josef Land will have you in awe of the flora and fauna as you visit seabird colonies and retrace the footsteps of early explorers.',
		price: '$6,000',
		img: 'images/product-data/snowy/north-pole.jpg'
	},
	japaneseVillage: { 
		name: 'Japanese Village',
		description: "I’m the best thing that ever happened to placeholder text. I write the best placeholder text, and I%'m the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weighs 400 pounds. Ok?",
		price: '$5,000',
		img: 'images/product-data/snowy/japanese-village.jpg'
	}
};



var productArray = Object.values(productObj);
 console.log(productArray);
// console.log(document.getElementById("display-case"))

if (document.getElementById("display-case")) {
	fillDOM(productArray);
}
