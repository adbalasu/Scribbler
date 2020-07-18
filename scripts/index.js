var allPosts = document.getElementById("allPosts");

allPosts.onclick = function(){
    window.location = "html/postlist.html";
}

//CREATE POST
// Get the modal
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the modal
var createPostButton = document.getElementById("createPost");

// Get the <span> element that closes the modal
var createPostCloseSpan = document.getElementsByClassName("create-post-close")[0];

// When the user clicks on the button, open the modal
createPostButton.onclick = function() {
  createPostModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
createPostCloseSpan .onclick = function() {
  createPostModal.style.display = "none";
  console.log("Sign Up Close Clicked");
}


