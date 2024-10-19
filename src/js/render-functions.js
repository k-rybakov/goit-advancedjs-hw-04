import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const notFound =
  'Sorry, there are no images matching your search query. Please try again!';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

iziToast.settings({
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

export const renderGallery = images => {
  if (images.length == 0) {
    iziToast.error({
      message: notFound,
      position: 'topRight',
    });
    return;
  }

  const gallery = document.querySelector('.gallery');

  const html = images
    .map(
      image =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
            />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${image.likes}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${image.views}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${image.comments}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${image.downloads}</span>
          </div>
        </div>
        </a>
    </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', html);

  lightbox.refresh();
};

export const toast = (message, type) => {
  if (type == 'error') {
    iziToast.error({ message });
  }

  if (type == 'success') {
    iziToast.success({ message });
  }
};

export const showLoader = () => (loader.style.display = 'block');

export const hideLoader = () => (loader.style.display = 'none');

export const hideLoadMoreBtn = () => (loadMoreBtn.style.display = 'none');

export const showLoadMoreBtn = () => (loadMoreBtn.style.display = 'block');
