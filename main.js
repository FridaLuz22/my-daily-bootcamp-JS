// buttons action publication
let buttonsActionsPost;
let buttonsDeletePost;
let modalDeletePost;
let modalAddPost;
let closeModalDeletePostButttons = [];
let buttonDeletePost;
let cardPost;
let postsContainer = document.querySelector(".posts-container");

function getElementsModalDeletePost() {
  modalDeletePost = document.getElementById("modal-delete-post");
  closeModalDeletePostButttons = document.querySelectorAll(".close");
  buttonDeletePost = document.getElementById("delete-post-button");
}

function getButtonsPosts() {
  buttonsActionsPost = document.querySelectorAll(".public-button");
  buttonsDeletePost = document.querySelectorAll(".button-delete");
}

function addEventToggleButtonDeleteToButtonsAction() {
  buttonsActionsPost.forEach((button) => {
    button.addEventListener(
      "click",
      function showAndHiddenButtonDelete(params) {
        let button_delete =
          params.currentTarget.parentNode.querySelector(".button-delete");
        if (button_delete.classList.contains("visibility-hidden")) {
          button_delete.classList.remove("visibility-hidden");
        } else button_delete.classList.add("visibility-hidden");
      }
    );
  });
}

function addEventShowModalToButtonsDeletes() {
  buttonsDeletePost.forEach((button) => {
    button.addEventListener("click", function deletePost(params) {
      modalDeletePost.classList.remove("visibility-hidden");
      cardPost = params.currentTarget.parentNode.parentNode.parentNode;
    });
  });
}

function addEventDeletePostToButtonModal() {
  buttonDeletePost.addEventListener("click", function showModal(params) {
    modalDeletePost.classList.add("visibility-hidden");
    cardPost.style.display = "none";
  });
}

function addEventCloseModalToButtonsCloses() {
  closeModalDeletePostButttons.forEach((_tag) => {
    _tag.addEventListener("click", function eventDissaperModal() {
      dissaperModal();
    });
  });
}

function dissaperModal() {
  modalDeletePost.classList.add("visibility-hidden");
}

function assingActionsToPostsButtons() {
  addEventToggleButtonDeleteToButtonsAction();
  addEventShowModalToButtonsDeletes();
  addEventCloseModalToButtonsCloses();
}

function init() {
  getElementsModalDeletePost();
  getButtonsPosts();
  assingActionsToPostsButtons();
  addEventDeletePostToButtonModal();
}

init();
