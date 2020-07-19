//SIGNUP
// Get the modal
var modal = document.getElementById("signUpModal");

// Get the button that opens the modal
var btn = document.getElementById("signUpButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("signup-close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  console.log("Sign Up Close Clicked");
}


//SIGNIN
// Get the modal
var signinModal = document.getElementById("signInModal");

// Get the button that opens the modal
var signInBtn = document.getElementById("signInButton");

// Get the <span> element that closes the modal
var signInSpan = document.getElementsByClassName("signin-close")[0];

// When the user clicks on the button, open the modal
signInBtn.onclick = function() {
    signInModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  signInSpan.onclick = function() {
    signInModal.style.display = "none";
    console.log("Sign In Close Clicked");
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == signInModal || event.target == modal) {
      signInModal.style.display = "none";
      modal.style.display = "none";
      console.log("Clicked outside  Modal");
    }
  } 

//NOT A MEMBER SIGNUP
var signUpHyperLink = document.getElementById("signup-hyperlink");

signUpHyperLink.onclick = function(){
    signInModal.style.display = "none";
    modal.style.display = "block";
}

// CLICK HANDLERS
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == signUpModal) {
      signUpModal.style.display = "none";
    }
    if (event.target == signInModal) {
      signInModal.style.display = "none";
    }
  });
  // Open Modal
  openModal = modal => {
    modal.style.display = "block";
  };
  //Close Modal
  closeModal = modal => {
    modal.style.display = "none";
  };
  //When SignUp hyperlink clicked
  signUpLink.onclick = function() {
    closeModal(signInModal);
    openModal(signUpModal);
  };