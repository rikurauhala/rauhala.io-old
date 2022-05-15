function showAll() {
    var secondaryProjects = document.getElementsByClassName("secondary");
    var buttonText = document.getElementById("button");
    
    for (var i = 0; i < secondaryProjects.length; i++) {
      secondaryProjects.item(i).style.display = "flex";
    }
    
    buttonText.style.display = "none";
}
