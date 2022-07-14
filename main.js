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
let imagesContainerPost;
let spanLocationAddPost;
let inputPost;
let closeModalDeletePostButttons;
let buttonDeletePost;
let cardPost;
let postsContainer = document.querySelector(".posts-container");
const classVisibilityHidden = "visibility-hidden";
const dateCardPost = `<div class="public-date">
                <div class="date-conte">
                  <a class="link-public" href="https://twitter.com/yummta?lang=es" target="_blank">
                    <img class="date-img" src="assets/profile.jpg" alt="Foto de perfil del usuario" />
                  </a>
                  <div class="date-text">
                    <a class="link-public" href="https://twitter.com/yummta?lang=es" target="_blank">
                      <h3>Paul Portillo</h3>
                    </a>
                    <p>04 de Julio, 2022</p>
                  </div>
                </div>
              </div>`;
const actionsCardPost = `<div class="buttons-actions">
                <button class="public-button">
                  <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <ellipse cx="2.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
                      <ellipse cx="9.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
                      <ellipse cx="16.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
                    </g>
                  </svg>
                </button>
                <button class="button-delete visibility-hidden">
                  <img src="assets/icons/delete.svg" width="10.67px" height="12px">
                  Delete
                </button>
              </div>`;

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
// image-uploaded
function addEventUploadFileInputModalAddPost() {
  'use strict'
  let file = document.getElementById('upload-files');
  let formData = new FormData(); 
  console.log(file);
  file.addEventListener('change', function(elemento){
      for(let i = 0 ; i < file.files.length ; i++){
          let miniature_id = Math.floor(Math.random()*30000) + '_' + Date.now();
          console.log("dentro del for")
          createMiniature(file,i,miniature_id);
          formData.append(miniature_id,file.files[i]);
          console.log(formData.getElementById);
      }
      elemento.target.value = '';
  });

  let createMiniature = function (file,iterator, miniature_id) {
      let miniature = document.createElement('div');
      miniature.classList.add('miniature',miniature_id);
      miniature.dataset.id = miniature_id;
      miniature.setAttribute('style',`background-image: url(${ URL.createObjectURL( file.files[iterator] ) })`);
      document.querySelector('.uploaded-image').appendChild(miniature);
      createCloseButton(miniature_id);
  }

  let createCloseButton = function(miniature_id) {
      console.log("se creo close buton");
      let closeButton = document.createElement('div');
      closeButton.classList.add('close-miniature');
      closeButton.innerText = 'DETELE';
      document.getElementsByClassName(miniature_id)[0].appendChild(closeButton);
  }

  document.body.addEventListener('click',function(elemento){
      if(elemento.target.classList.contains('close-miniature')){
          elemento.target.parentNode.remove();
          formData.delete(elemento.target.parentNode.dataset.id);
      }
  } )
}
// end image-uploaded
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

function insertNewPost(
  idCardPost,
  headerCardPost,
  textCardPost,
  imagesContainerPost
) {
  let newCardPost = document.createElement("div");
  newCardPost.classList.add("public");

  newCardPost.appendChild(idCardPost);
  newCardPost.appendChild(headerCardPost);
  newCardPost.appendChild(textCardPost);
  newCardPost.appendChild(imagesContainerPost);
  postsContainer.prepend(newCardPost);
}

function getInputIdCard(id) {
  let idCardPost = document.createElement("input");
  idCardPost.setAttribute("type", "hidden");
  idCardPost.setAttribute("value", id);
  return idCardPost;
}

function constructNewPost(data) {
  let headerCardPost = document.createElement("div");
  let textCardPost = document.createElement("div");
  let imagesContainerCardPost = document.createElement("div");
  imagesContainerCardPost.classList.add("images");
  let idCardPost = getInputIdCard(data.id);
  textCardPost.classList.add("text");
  headerCardPost.classList.add("public-header");
  headerCardPost.innerHTML = dateCardPost + actionsCardPost;
  textCardPost.innerHTML = "<p>" + data.description + "</p>";
  imagesContainerCardPost.innerHTML = insertImagesPost(data.images);
  console.log(imagesContainerCardPost);
  insertNewPost(
    idCardPost,
    headerCardPost,
    textCardPost,
    imagesContainerCardPost
  );
}

function insertImagesPost(images) {
  let imagesContainer = document.createElement("div");
  let imageCardPost;
  images.forEach((img) => {
    imageCardPost = document.createElement("img");
    imageCardPost.setAttribute("src", img);
    imageCardPost.setAttribute("alt", "imagePost");
    imagesContainer.append(imageCardPost);
  });
  return imagesContainer.innerHTML;
}

// let post = {
//   id: 0,
//   description: "Hola esta es una nueva publicacion.",
//   images: ["assets/feed/cake.jpg"],
//   state: 1,
// };
