export const state = {
  query: '',
  sort: 'asc',
  selectedProductId: null,
  error: null,
  isDarkMode: false
};

export const updateState = (next) => {
  Object.assign(state, next);
};
