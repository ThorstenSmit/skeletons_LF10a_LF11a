import { products } from './data.js';

const state = {
  query: '',
  sort: 'asc'
};

const els = {
  list: document.querySelector('#list'),
  search: document.querySelector('#search'),
  sortAsc: document.querySelector('#sort-asc'),
  sortDesc: document.querySelector('#sort-desc')
};

function applyFilters(data, { query, sort }) {
  const q = query.trim().toLowerCase();
  const filtered = q
    ? data.filter((product) => product.name.toLowerCase().includes(q))
    : [...data];

  const sorted = filtered.sort((a, b) =>
    sort === 'asc' ? a.price - b.price : b.price - a.price
  );

  return sorted;
}

function renderList(items) {
  els.list.innerHTML = '';

  if (!items.length) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = 'Keine Treffer';
    els.list.appendChild(li);
    return;
  }

  const fragment = document.createDocumentFragment();

  items.forEach((product) => {
    const li = document.createElement('li');
    li.className = 'product';
    li.innerHTML = `<div><strong>${product.name}</strong><span>${product.category}</span></div><div>${product.price.toFixed(2)} €</div>`;
    fragment.appendChild(li);
  });

  els.list.appendChild(fragment);
}

function update() {
  const items = applyFilters(products, state);
  renderList(items);
}

function bindEvents() {
  els.search.addEventListener('input', (event) => {
    state.query = event.target.value;
    update();
  });

  els.sortAsc.addEventListener('click', () => {
    state.sort = 'asc';
    els.sortAsc.setAttribute('aria-pressed', 'true');
    els.sortDesc.setAttribute('aria-pressed', 'false');
    update();
  });

  els.sortDesc.addEventListener('click', () => {
    state.sort = 'desc';
    els.sortAsc.setAttribute('aria-pressed', 'false');
    els.sortDesc.setAttribute('aria-pressed', 'true');
    update();
  });
}

bindEvents();
update();
