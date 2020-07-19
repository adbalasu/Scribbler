var deletePostModal = document.getElementById("deletePostModal");
var noDelete = document.getElementById("noDelete");
var yesDelete = document.getElementById("yesDelete");

// Get button to open delete Modal
var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);

// Get the all dots
var dots = document.querySelectorAll(".dots");
var dotsArray = Array.from(dots);

//Update Session Storage and then redirect to posts page
navigateToPost = postThread => {
  var post = postThread.closest(".post");
  var author = post.querySelector(".username p").textContent.trim();
  var postTitle = post.querySelector(".title p").textContent.trim();
  var postContent = post.querySelector(".content").textContent.trim();
  sessionStorage.setItem("author", author);
  sessionStorage.setItem("postTitle", postTitle);
  sessionStorage.setItem("postContent", postContent);
  window.location.href = "../html/post.html";
};

// Get No Button
var selectedPost;
openDeletePostModal = (deletePostModal, clickedIcon) => {
  selectedPost = "";
  openModal(deletePostModal);
  selectedPost = clickedIcon.closest(".post");
};

deletePost = () => {
  selectedPost.remove();
  closeModal(deletePostModal);
};


//Declare Event Listeners
deleteIconsArray.map(deleteIcon => {
  deleteIcon.addEventListener("click", e =>
    openDeletePostModal(deletePostModal, e.target)
    );
});
dotsArray.map(dot => {
  dot.addEventListener("click", e => navigateToPost(e.target));
});

window.addEventListener("click", function(event) {
  if (event.target == deletePostModal) {
    deletePostModal.style.display = "none";
  }
});

noDelete.addEventListener("click", () => closeModal(deletePostModal));
yesDelete.addEventListener("click", () => deletePost());
