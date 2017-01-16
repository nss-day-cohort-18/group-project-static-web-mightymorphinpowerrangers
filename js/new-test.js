function fillDOM(dataArray) { 

	var parent = document.getElementById("display-case");
	var target = parent.getElementsByTagName("DIV");
	// console.log(parent);
	// console.log(target);

	for (var i = 0; i < target.length; i++) {

		// console.log(target[i].hasAttribute("class"));
		// console.log(target[i].getAttribute("class") === 
		// 			  "product-column");
		// console.log(target[i].hasAttribute("class") 
		// 			   &&
		// 			   target[i].getAttribute("class") === 
		// 			   "product-column");

		if ( target[i].hasAttribute("class") 
			&& 
			target[i].getAttribute("class") === "product-column" ) {
			
			//Fill the div with an <img> and a <p>.
			while(target[i].hasChildNodes()) { 
				target[i].removeChild(target[i].firstChild)
			}	
			target[i].appendChild(document.createElement("IMG"));
			target[i].appendChild(document.createElement("P"));

			//Give new elements their classes, connecting them to the stylesheet.
			target[i].firstChild.nextSibling.setAttribute("class", "product-copy")
			target[i].firstChild.setAttribute("class", "product-column");

			//Give the <img> the "src" attribute.
			target[i].firstChild.setAttribute("src", dataArray[i].img);
			
			console.log(Object.keys(dataArray[0]).length);
			//Fill the <p> with product info
			var prop = Object.keys(dataArray[i]);

			for (var y = 0; y < prop.length-1; y++) {
				target[i].firstChild.nextSibling.innerHTML += prop[y] + ": " + dataArray[i][prop[y]] + "\n";
			}
		}
	} 
}



var productArray = [
	{
		name: "Petal Castle", 
		description: "Enjoy two magnificent buildings wrapped in 65 secluded acres at our Bed and Breakfast in Michigan. Experience romantic getaways in Michigan like never before. Our inn features 10 rooms or suites with Whirlpool tubs and fireplaces, king or queen sized beds, and private baths with all the amenities a discriminating guest appreciates. Every stay in our Allegan, Michigan bed and breakfast includes full gourmet breakfast; cable TV/DVD, FREE WiFi; private lake and pond with complimentary use of kayaks and paddle boat or snowshoes on site; screened gazebo and porch; walking trails through wooded estate; on-site spa for couple’s side by side massages, pedicures, manicures, and facials in a beautiful natural setting at our Michigan Inn and Spa. Join us for your romantic getaways in Michigan.", 
		price: "32", 
		img: 'images/product-data/romantic/petal-castle.jpg'
	},
	{
		name: "Love Tunnel", 
		description: "Almost everyone agrees, for example, that there’s a certain romance to being near the ocean. And there are plenty of places to make those magical sunset beach strolls happen—like the South Pacific island of Bora Bora, where resorts have thatch-roofed bungalows set on stilts over crystal-blue lagoons, and where the powdery sand stretches for miles. Even for couples who worry about sunburn or who hate the feel of sand between their toes, smelling the salt air and watching seabirds dive from the deck of a tiny ferryboat—like on the ride across Puget Sound to Whidbey Island, just off the coast of Washington state—can be pretty dreamy.", 
		price: '14', 
		img: 'images/product-data/romantic/Funland_Tunnel_of_Love.png'
	},
	{
		name: "Maple Hill", 
		description: 'This home was picked up and moved in early 2013, to a spot some six miles away from its original location. The man who had purchased the land and house wanted to tear it down and build a new home on the spot, so a preservationist purchased the house alone from him and moved it a few miles down the road. It is alleged to be haunted by residual energy from previous owners, who, later in life committed suicide. Whether the energy stayed in the old spot or moved on with the house is as yet to be determined.',
		price: "8,222",
		img: 'images/product-data/haunted/maple-hill-manor.jpg'
	},
	{
		name: 'THE VILLISCA AXE MURDER HOUSE', 
		description: 'On a quiet residential street in this small town sits an old white frame house. On a dark evening, the absence of lights and sounds are the first indication to visitors that this house is different from the other homes that surround it. Upon closer inspection, you\'ll notice her doors and windows are tightly closed and covered. An outhouse in the backyard suggests that this house does not occupy a place in the 21st century but somehow belongs in another era or another story. A weather-beaten sign warns rather than welcomes. This is the "Murder House".', 
		price: '10,000,000', 
		img: 'images/product-data/haunted/haunted-house.jpg'
	},
	{ 
		name: 'Das Boot',
		description: 'It is 1942 and the German submarine fleet is heavily engaged in the so-called "Battle of the Atlantic" to harass and destroy British shipping. With better escorts of the Destroyer Class, however, German U-Boats have begun to take heavy losses. Relive the horror of war on this lifelike submarine simulation!',
		price: '10,000',
		img: 'images/product-data/watery/das-boot.jpg'
	},
	{ 
		name: 'Biosphere',
		description: 'Are you a loser who is doing nothing with your life? Is your significant other actively involved in saving the environment, but you couldn\'t care less about saving the Earth? Come to Bio-Dome, where you must learn how to protect the Earth and help your significant other complete her mission! Oh, and you have to stay for a year!',
		price: '8,000',
		img: 'images/product-data/watery/biosphere.jpg'
	},
	{ 
		name: 'North Pole',
		description: 'Imagine standing at the top of the Earth, glass of champagne in hand – and everywhere you look is south. That is the essence of the 14-day North Pole: The Ultimate Arctic Adventure aboard 50 Years of Victory, the most powerful nuclear icebreaker in the world. Crush through multiyear ice on the Arctic Ocean, sightsee by helicopter on the lookout for walruses, seals, whales, and polar bears, or take a tethered hot-air balloon ride at 90º N, weather permitting. Possible stops at the island of Franz Josef Land will have you in awe of the flora and fauna as you visit seabird colonies and retrace the footsteps of early explorers.',
		price: '6,000',
		img: 'images/product-data/snowy/north-pole.jpg'
	},
	{ 
		name: 'Japanese Village',
		description: "I’m the best thing that ever happened to placeholder text. I write the best placeholder text, and I%'m the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weighs 400 pounds. Ok?",
		price: '5,000',
		img: 'images/product-data/snowy/japanese-village.jpg'
	}
];

if (document.getElementById("display-case")) {
	fillDOM(productArray);
}
