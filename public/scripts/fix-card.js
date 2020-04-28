// Defining event listener function
function displayWindowSize() {
    //getting current width of page
    var w = document.documentElement.clientWidth;
    //checking if card mode is activated and the width is less than 950
    if (w < 950 && document.getElementById("checkbox").checked === true) {
        document.getElementById("checkbox").click();
    }
}
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);
// Calling the function for the first time
displayWindowSize();