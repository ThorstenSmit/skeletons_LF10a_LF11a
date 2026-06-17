export const renderList = (items, selectors) => {
  const list = selectors.list;
  list.innerHTML = '';

  if (!items.length) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'Keine Produkte verfügbar. Versuchen Sie einen anderen Suchbegriff.';
    list.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  items.forEach((product) => {
    const li = document.createElement('li');
    li.className = 'product-card';
    li.innerHTML = `
      <div class="product-details">
        <p class="product-meta">${product.category}</p>
        <h3 class="product-title">${product.name}</h3>
        <p>${product.short}</p>
        <div class="product-meta">
          <span class="badge">${product.badge}</span>
          <span>${product.stock ? `${product.stock} auf Lager` : 'Nicht verfügbar'}</span>
        </div>
      </div>
      <div class="product-actions">
        <button class="btn-secondary" data-action="details" data-id="${product.id}">Details</button>
        <button class="btn-primary" data-action="cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
          ${product.stock === 0 ? 'Nicht verfügbar' : 'In den Warenkorb'}
        </button>
      </div>
    `;
    fragment.appendChild(li);
  });

  list.appendChild(fragment);
};

export const renderModal = (product, selectors) => {
  selectors.modalContent.innerHTML = `
    <p class="product-meta">Kategorie: ${product.category}</p>
    <p>${product.short}</p>
    <p><strong>Preis:</strong> ${product.price.toFixed(2)} €</p>
    <p><strong>Verfügbar:</strong> ${product.stock ? product.stock : 'Nicht verfügbar'}</p>
  `;
};
