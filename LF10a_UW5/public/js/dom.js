import { applyFilters, getStatusText } from './filters.js';
import { renderList, renderModal } from './render.js';
import { products } from '../data.js';
import { state, updateState } from './state.js';

export const selectors = {
  list: document.querySelector('#list'),
  search: document.querySelector('#search'),
  sortAsc: document.querySelector('#sort-asc'),
  sortDesc: document.querySelector('#sort-desc'),
  statusText: document.querySelector('#status-text'),
  themeToggle: document.querySelector('#theme-toggle'),
  modal: document.querySelector('#detail-modal'),
  modalClose: document.querySelector('#modal-close'),
  modalCancel: document.querySelector('#cancel'),
  modalAdd: document.querySelector('#add-cart'),
  modalContent: document.querySelector('#modal-content')
};

let currentItems = products;

const updateView = () => {
  currentItems = applyFilters(products, state);
  selectors.statusText.textContent = getStatusText(currentItems, state.query);
  renderList(currentItems, selectors);
};

const closeModal = () => {
  selectors.modal.classList.add('hidden');
  selectors.modal.setAttribute('aria-hidden', 'true');
  updateState({ selectedProductId: null });
};

const openModal = (productId) => {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) {
    selectors.statusText.textContent = 'Produkt konnte nicht geladen werden.';
    return;
  }

  updateState({ selectedProductId: product.id });
  renderModal(product, selectors);
  selectors.modal.classList.remove('hidden');
  selectors.modal.removeAttribute('aria-hidden');
  selectors.modalAdd.disabled = product.stock === 0;
  selectors.modalAdd.textContent = product.stock === 0 ? 'Nicht verfügbar' : 'In den Warenkorb';
  selectors.modalAdd.focus();
};

const handleActions = (event) => {
  const action = event.target.dataset.action;
  const id = event.target.dataset.id;
  if (!action || !id) {
    return;
  }

  if (action === 'details') {
    openModal(id);
  }

  if (action === 'cart') {
    const product = products.find((item) => item.id === Number(id));
    if (!product || product.stock === 0) {
      selectors.statusText.textContent = 'Dieses Produkt kann nicht in den Warenkorb gelegt werden.';
      return;
    }
    selectors.statusText.textContent = `${product.name} wurde dem Warenkorb hinzugefügt.`;
  }
};

const toggleTheme = () => {
  const { isDarkMode } = state;
  const nextMode = !isDarkMode;
  document.body.dataset.theme = nextMode ? 'dark' : 'light';
  selectors.themeToggle.textContent = nextMode ? 'Light Mode' : 'Dark Mode';
  updateState({ isDarkMode: nextMode });
};

export const bindEvents = () => {
  selectors.search.addEventListener('input', (event) => {
    updateState({ query: event.target.value });
    updateView();
  });

  selectors.sortAsc.addEventListener('click', () => {
    updateState({ sort: 'asc' });
    selectors.sortAsc.setAttribute('aria-pressed', 'true');
    selectors.sortDesc.setAttribute('aria-pressed', 'false');
    updateView();
  });

  selectors.sortDesc.addEventListener('click', () => {
    updateState({ sort: 'desc' });
    selectors.sortAsc.setAttribute('aria-pressed', 'false');
    selectors.sortDesc.setAttribute('aria-pressed', 'true');
    updateView();
  });

  selectors.list.addEventListener('click', handleActions);

  selectors.modalClose.addEventListener('click', closeModal);
  selectors.modalCancel.addEventListener('click', closeModal);

  selectors.themeToggle.addEventListener('click', toggleTheme);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !selectors.modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};

export const init = () => {
  updateView();
};
