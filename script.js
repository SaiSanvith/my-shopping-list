var myform=document.getElementById("myform");
var myitems=document.getElementById("myitems");
var myinput=document.getElementById("myinput");
myform.addEventListener("submit", function(event) {
    event.preventDefault(); 
    var newItem = myinput.value.trim(); 
    if (newItem) {
        var li = document.createElement("li");
        li.textContent = newItem;
        myitems.appendChild(li);
        myinput.value = ""; // Clear the input field
    } else {
        alert("Please enter a valid item.");
    }
    function createitems(inputitems){
         var item = `<li>${inputItems}
    <button onclick="deleteItem(this)">Delete</button>
    </li>`;
    myItem.insertAdjacentHTML("beforeend", item);
    myInput.value = "";
    myInput.focus();
    }
    function deleteItem(button) {
        Element.parentelement.remove();
    }