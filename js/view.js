scramble();
for(var i = 0;i < numcub;i++){
	var node = document.createElement("p");
	var textnode = document.createTextNode((i + 1 + ". ") + scramblestring(i));
	node.appendChild(textnode);
	document.getElementById("scram").appendChild(node);
}