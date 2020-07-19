var authorNode = document.getElementById("author");

var titleNode = document.getElementById("postTitle");

var contentNode = document.getElementById("postContent");

var likeCount = 0;



window.onload = function() {

  //Fetch data from the session to get details for the post the user has clicked on

  authorNode.innerHTML = sessionStorage.getItem("author");

  titleNode.innerHTML = sessionStorage.getItem("postTitle");

  contentNode.innerHTML = sessionStorage.getItem("postContent");
};

document.addEventListener(
  "click",
  function(ev) {
    if (hasClass(ev.target, "saved")) {
      // Edit button has been clicked

      ev.target.classList.remove("saved");

      ev.target.classList.add("unsaved");

      ev.target.innerHTML = 'Save <i class="fa fa-save"></i>';

      titleNode.setAttribute("contenteditable", true);

      titleNode.classList.add("editable");

      contentNode.setAttribute("contenteditable", true);

      contentNode.classList.add("editable");

    } else if (hasClass(ev.target, "unsaved")) {
      // Saven button clicked

      ev.target.classList.remove("unsaved");

      ev.target.classList.add("saved");

      ev.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';

      titleNode.setAttribute("contenteditable", false);

      titleNode.classList.remove("editable");

      contentNode.setAttribute("contenteditable", false);

      contentNode.classList.remove("editable");

      // Update session storage when Save button has been hit so that correct data is shown when this page is refreshed

      sessionStorage.setItem("postTitle", titleNode.innerText);

      sessionStorage.setItem("postContent", contentNode.innerText);

    } else if (hasClass(ev.target, "like-button")) {
      //Like button was clicked, increment like count

      likeCount++;

      ev.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';

      if (likeCount == 1) {

        document.getElementById("likeText").innerHTML = "1 person likes this!";

      } else if (likeCount > 1) {

        document.getElementById("likeText").innerHTML =

        likeCount + " people like this!";

      }

    } else if (hasClass(ev.target, "comment-button")) {

      //Comment button was clicked

      var commentText = document.getElementById("commentBox").value.trim();

      if (commentText !== "") {

        // Logic to post latest comment at the top

        document.getElementById("commentsWrapper").innerHTML =

        "<p>" +

        commentText +

        "</p>" +

        document.getElementById("commentsWrapper").innerHTML;

      }
      // Emptying the value after adding the comment to All comments section

      document.getElementById("commentBox").value = "";

    }

  },

  false

  );

function hasClass(elementName, className) {
  return elementName.classList.contains(className);
}
