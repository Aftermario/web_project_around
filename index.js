const popupElement = document.getElementById("popup-edit-profile");
const openPopupElement = document.querySelector(".profile__button-open");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupName = document.getElementById("input-name");
const popupAboutme = document.getElementById("input-aboutme");
const formProfile = document.querySelector(".popup__form");
const closeButtonElement = document.querySelector(".popup__button-close");
const cardLike = document.querySelector(".element__like");

function likeCardHandler(evt) {
  cardLike.classList.add("element__liked-active");
}
cardLike.addEventListener("click", likeCardHandler);

function handleOpenProfile(evt) {
  popupElement.classList.add("popup__show");
}
function handleCloseProfile(evt) {
  evt.preventDefault();
  popupElement.classList.remove("popup__show");
}
openPopupElement.addEventListener("click", handleOpenProfile);

closeButtonElement.addEventListener("click", handleCloseProfile);

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  profileName.textContent = popupName.value; // Actualiza el nombre del perfil
  profileJob.textContent = popupAboutme.value; // Actualiza el hobbie del perfil
  handleCloseProfile(); // Cierra el popup después de actualizar el perfil
});
