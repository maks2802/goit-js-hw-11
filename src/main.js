import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

document.querySelector('#search-form').addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  clearGallery();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query.",
    });
    return;
  }

  showLoadingIndicator();

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, no images match your search query. Please try again.",
        position: "topRight",
      });
      return;
    }

    renderGallery(images);
    initLightbox();
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
      position: "topRight",
    });
    console.error(error);
  } finally {
    hideLoadingIndicator();
  }
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

function initLightbox() {
  if (lightbox) lightbox.destroy();
  lightbox = new SimpleLightbox('.gallery-item', { captionsData: 'alt', captionDelay: 250 });
}

function showLoadingIndicator() {
  const indicator = document.getElementById('loading-indicator');
  indicator.style.display = 'block';
}

function hideLoadingIndicator() {
  const indicator = document.getElementById('loading-indicator');
  indicator.style.display = 'none';
}