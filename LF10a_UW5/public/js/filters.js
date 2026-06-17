export const applyFilters = (data, { query, sort }) => {
  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? data.filter((product) => product.name.toLowerCase().includes(normalized))
    : [...data];

  return filtered.sort((a, b) =>
    sort === 'asc' ? a.price - b.price : b.price - a.price
  );
};

export const getStatusText = (items, query) => {
  if (!items.length && query.trim()) {
    return 'Keine Treffer gefunden. Bitte Filter ändern.';
  }

  return `${items.length} Produkt${items.length === 1 ? '' : 'e'} verfügbar.`;
};
