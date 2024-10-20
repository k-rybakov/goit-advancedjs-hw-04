import iziToast from 'izitoast';
import { findPhotos, PER_PAGE } from './js/pixaby-api';
import {
  renderGallery,
  toast,
  showLoader,
  hideLoader,
  showLoadMoreBtn,
  hideLoadMoreBtn,
} from './js/render-functions';

const USER_ERROR_MESSAGE = 'Something went wrong :(';
const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let page = 1;
let totalPages = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = form.elements.search.value.trim();

  if (!query) {
    toast("Query mustn't be empty", 'error');
    return;
  }

  document.querySelector('.gallery').innerHTML = '';
  currentQuery = query;
  page = 1;

  try {
    showLoader();
    const apiResponse = await findPhotos(query, page);
    totalPages = Math.ceil(apiResponse.total / PER_PAGE);

    renderGallery(apiResponse?.hits ?? []);
    page < totalPages ? showLoadMoreBtn() : hideLoadMoreBtn();
    page++;
  } catch (e) {
    console.log(e.message);
    toast(e.message || USER_ERROR_MESSAGE, 'error');
  } finally {
    hideLoader();
    form.reset();
  }
});

loadMoreBtn.addEventListener('click', async e => {
  e.preventDefault();
  showLoader();

  try {
    const apiResponse = await findPhotos(currentQuery, page);

    renderGallery(apiResponse?.hits ?? []);

    if (page < totalPages) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
      toast(
        "We're sorry, but you've reached the end of search results.",
        'success'
      );
    }
    page++;
  } catch (e) {
    console.log(e.message);
    toast(e.message || USER_ERROR_MESSAGE, 'error');
  } finally {
    hideLoader();
  }
});
