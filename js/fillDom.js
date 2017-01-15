function fillDOM(dataObj) {
	//need to make an element under the container in the html. so I need to get the div ID into which I'm GIVING BIRTH TO CHILDREN

		var target = document.getElementById("display-case");
		console.log("num child nodes: " + target.hasChildNodes());

		while (target.hasChildNodes() ){
			target.removeChild(target[0]);
		}

		console.log("num child nodes: " + target.hasChildNodes());

		for (var i= 0; i< dataObj.length; i++ ){
				target.appendChild();
				let contentNow = dataObj[i];
				console.log("Thing to place: " + contentNow);
				let elementNow = target.childNodes[i];
				console.log("Where thing is being placed: " + elementNow);
				sort(contentNow, elementNow, i, target);
			}
		}
	}
}

function sort(contentNow, elementNow, index, target ){
	if (target[index-1] 
		&& 
		contentNow.category !== contentNow[index-1].category ){

		for (let i= index; i< elementNow.parentNode.childNodes.slice[0, index+1]; i++ ){
			var toPlace = contentNow[index].category;
			var toCompare = contentNow[index-i].category;

			if ( toPlace === toCompare ){
				toCompare.append(toPlace);
				break;
			}
		} 
	} else {
			target[index] = contentNow[index];
	}
}