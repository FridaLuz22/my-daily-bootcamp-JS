// buttons action publication
let buttonsActionsPost;
let buttonsDeletePost;
let modalDeletePost;
let modalAddPost;
let textareaModalPost;
let butttonPublishPost;
let buttonLocationPost;
let buttonImagesPost;
let buttonCloseModalAddPost;
let imagesContainerPost;
let inputPost;
let closeModalDeletePostButttons;
let buttonDeletePost;
let cardPost;
let postsContainer = document.querySelector(".posts-container");
const classVisibilityHidden = "visibility-hidden";

function getElementsModalDeletePost() {
  modalDeletePost = document.getElementById("modal-delete-post");
  closeModalDeletePostButttons = document.querySelectorAll(".close");
  buttonDeletePost = document.getElementById("delete-post-button");
}

function getElementsModalAddPost() {
  inputPost = document.querySelector(".learning-input");
  modalAddPost = document.getElementById("modal-add-post");
  textareaModalPost = document.querySelector(".textarea-modal-add-post");
  butttonPublishPost = document.querySelector(".publish-modal");
  buttonLocationPost = document.querySelector(".span-location");
  buttonImagesPost = document.querySelector(".span-upload-image");
  imagesContainerPost = document.querySelector(".uploaded-image");
  buttonCloseModalAddPost = document.querySelector(".close-input");
}

function addEventsElementModalAddPost() {
  addEventClickInputPost();
  addEventClickCloseModalAddPost();
}

function addEventClickInputPost() {
  inputPost.addEventListener("click", toggleShowAndCloseModalAddPost);
}

function toggleShowAndCloseModalAddPost() {
  if (modalAddPost.classList.contains(classVisibilityHidden)) {
    modalAddPost.classList.remove(classVisibilityHidden);
  } else modalAddPost.classList.add(classVisibilityHidden);
}

function addEventClickCloseModalAddPost() {
  buttonCloseModalAddPost.addEventListener(
    "click",
    toggleShowAndCloseModalAddPost
  );
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
        let buttonDelete =
          params.currentTarget.parentNode.querySelector(".button-delete");
        if (buttonDelete.classList.contains(classVisibilityHidden)) {
          buttonDelete.classList.remove(classVisibilityHidden);
        } else buttonDelete.classList.add(classVisibilityHidden);
      }
    );
  });
}

function addEventShowModalToButtonsDeletes() {
  buttonsDeletePost.forEach((button) => {
    button.addEventListener("click", function deletePost(params) {
      modalDeletePost.classList.remove(classVisibilityHidden);
      cardPost = params.currentTarget.parentNode.parentNode.parentNode;
    });
  });
}

function addEventDeletePostToButtonModal() {
  buttonDeletePost.addEventListener("click", function showModal() {
    modalDeletePost.classList.add(classVisibilityHidden);
    cardPost.style.display = "none";
  });
}

function addEventCloseModalToButtonsCloses() {
  closeModalDeletePostButttons.forEach((_tag) => {
    _tag.addEventListener("click", dissaperModal);
  });
}

function dissaperModal() {
  modalDeletePost.classList.add(classVisibilityHidden);
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
  getElementsModalAddPost();
  addEventsElementModalAddPost();
}

init();
