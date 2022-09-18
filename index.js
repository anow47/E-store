
// var settings ****************************************************
var $header = $('header');

$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $($header).addClass("stick");
    }else {
        $($header).removeClass("stick");
    }
    });

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Change Search Icon on products
const changeIcon= function (icon) {
  icon.classList.toggle('fa-times')
}

// add an active class to navbar
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active')
  }
})

// Select increment and decrement buttons
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
let count = 1;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  if(count <= 0){
    count = 0;
  }else{
    count--;
  }
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Add click event to buttons
increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);

///////////////////////////////////////////////////////////


///// Select increment and decrement buttons
const increment2 = document.getElementById("increment2");
const decrement2 = document.getElementById("decrement2");

// Select total count
const totalCount2 = document.getElementById("total-count2");

// Variable to track count
let count2 = 1;

// Display initial count value
totalCount2.innerHTML = count2;

// Function to increment count
const handleIncrement2 = () => {
  if(count2 <= 0){
    count2 = 0;
  }else{
    count2--;
  }
  totalCount2.innerHTML = count2;
};

// Function to decrement count
const handleDecrement2 = () => {
  count2++;
  totalCount2.innerHTML = count2;
};

// Add click event to buttons
increment2.addEventListener("click", handleIncrement2);
decrement2.addEventListener("click", handleDecrement2);

// decrement(){
//   if(this.counter > 0){
//     this.counter -= 1
//   }
// }