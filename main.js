// buttons action publication
let buttons_actions;
let buttons_deletes;
let modal;
let close_buttons = [];
let button_delete_post;
let card_post;
let post_container = document.querySelector(".posts-container");

function getModalElements() {
  modal = document.getElementById("modal-2");
  close_buttons = document.querySelectorAll(".close");
  button_delete_post = document.getElementById("delete-post-button");
}

function getButtonsPosts() {
  buttons_actions = document.querySelectorAll(".public-button");
  buttons_deletes = document.querySelectorAll(".button-delete");
}

function addEventToggleButtonDeleteToButtonsAction() {
  buttons_actions.forEach((button) => {
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
  buttons_deletes.forEach((button) => {
    button.addEventListener("click", function deletePost(params) {
      modal.classList.remove("visibility-hidden");
      card_post = params.currentTarget.parentNode.parentNode.parentNode;
    });
  });
}

function addEventDeletePostToButtonModal() {
  button_delete_post.addEventListener("click", function showModal(params) {
    modal.classList.add("visibility-hidden");
    card_post.style.display = "none";
  });
}

function addEventCloseModalToButtonsCloses() {
  close_buttons.forEach((_tag) => {
    _tag.addEventListener("click", function eventDissaperModal() {
      dissaperModal();
    });
  });
}

function dissaperModal() {
  modal.classList.add("visibility-hidden");
}

function assingActionsToPostsButtons() {
  addEventToggleButtonDeleteToButtonsAction();
  addEventShowModalToButtonsDeletes();
  addEventCloseModalToButtonsCloses();
}

function init() {
  getModalElements();
  getButtonsPosts();
  assingActionsToPostsButtons();
  addEventDeletePostToButtonModal();
}

init();
