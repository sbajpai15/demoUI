function addListOfEvents() {
    var x = ["Mercury: It is the closest planet to the Sun, and second smallest planet in the solar system.",
    "Venus: It is the second planet in the solar system.", 
    "Earth: Our planet earth is the third planet in the solar system.", 
    "Mars: It is the fourth planet from the Sun and is commonly referred to as the Red Planet.",
    "Jupiter: It is the fifth planet from the Sun and is the largest planet in the solar system.",
    "Saturn: It is the sixth planet from the Sun and is the second largest in the solar system",
    "Uranus: It is the seventh planet from the Sun and is the third largest in the solar system.",
    "Neptune: It is the outermost planet of the solar system."];
    
    var newData = document.createElement("DIV"); 

    var node1 = document.createElement("p");
    var textnode1 = document.createTextNode("");
    node1.appendChild(textnode1);
    newData.appendChild(node1);


    for (i = 0; i < x.length; i++) {
    
        var node = document.createElement("LI");
        var textnode = document.createTextNode(x[i]);
        node.appendChild(textnode);
        newData.appendChild(node);
    }
    

    document.getElementById("addEventNames").appendChild(newData).style.marginLeft = "20px";;
 }
 
