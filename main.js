// buttons action publication
let buttonsActionsPost;
let buttonsDeletePost;
let modalDeletePost;
let modalAddPost;
let textareaModalPost;
let buttonPublishPost;
let buttonLocationPost;
let buttonImagesPost;
let buttonCloseModalAddPost;
let inputFileImageModalAddPost;
let imagesContainerPost;
let spanLocationAddPost;
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
  buttonPublishPost = document.querySelector(".publish-post");
  buttonLocationPost = document.querySelector(".span-location");
  buttonImagesPost = document.querySelector(".span-upload-image");
  imagesContainerPost = document.querySelector(".uploaded-image");
  buttonCloseModalAddPost = document.querySelector(".close-input");
  spanLocationAddPost = document.querySelector(".location-modal");
  inputFileImageModalAddPost = document.getElementById("upload-files");
}

function verifyData() {
  if (textareaModalPost.value.trim() == "") {
    document.querySelector(".warning").style.display = "flex";
    return false;
  }
}

function publishNewPost() {
  if (verifyData()) console.log("aniadir");
}

function addEventsElementModalAddPost() {
  addEventClickInputPost();
  addEventClickCloseModalAddPost();
  addEventClickPublishModalAddPost();
  buttonLocationPost.addEventListener("click", toggleLocationModalAddPost);
  addEventUploadFileInputModalAddPost();
}

function addEventUploadFileInputModalAddPost() {
  console.log(inputFileImageModalAddPost.files);
  inputFileImageModalAddPost.onchange = () => {
    console.log("CHANGE");
    console.log(inputFileImageModalAddPost.files);
  };
}

function addEventClickInputPost() {
  inputPost.addEventListener("click", toggleShowAndCloseModalAddPost);
}

function toggleShowAndCloseModalAddPost() {
  if (modalAddPost.classList.contains(classVisibilityHidden)) {
    modalAddPost.classList.remove(classVisibilityHidden);
  } else modalAddPost.classList.add(classVisibilityHidden);
  document.querySelector(".warning").style.display = "none";
}

function toggleLocationModalAddPost() {
  spanLocationAddPost.style.display =
    spanLocationAddPost.style.display == "none" ? "flex" : "none";
}

function addEventClickCloseModalAddPost() {
  buttonCloseModalAddPost.addEventListener(
    "click",
    toggleShowAndCloseModalAddPost
  );
}

function addEventClickPublishModalAddPost() {
  buttonPublishPost.addEventListener("click", publishNewPost);
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
