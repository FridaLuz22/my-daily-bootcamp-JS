// buttons action publication
let buttons_actions = document.querySelectorAll(".public-button");
let buttons_deletes = document.querySelectorAll(".button-delete");
buttons_actions.forEach((button) => {
  button.addEventListener("click", function name(params) {
    let button_delete =
      params.currentTarget.parentNode.querySelector(".button-delete");
    if (button_delete.classList.contains("visibility-hidden")) {
      button_delete.classList.remove("visibility-hidden");
    } else button_delete.classList.add("visibility-hidden");
  });
});

buttons_deletes.forEach((button) => {
  button.addEventListener("click", function name(params) {
    console.log("Hola");
  });
});
