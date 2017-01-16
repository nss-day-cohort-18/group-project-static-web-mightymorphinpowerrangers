function fillDOM(dataArray) { 

	var parent = document.getElementById("display-case");
	var target = parent.getElementsByTagName("div");
	//We scrub the parent nodes
	for (var i = 0; i < target.childNodes; i++) ){
		if ( target[i].hasAttribute("class") 
			&& 
			target[i].getAttribute("class") === "product-column" )
			alert(true);
		} else 
			alert(false);
	}

	for (i = 0; i < dataArray.length; i++) {

	}
}