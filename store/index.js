export const state = () => ({
  loading: false,
  error: null,
});
export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  clearError(state) {
    state.error = null;
  },
};
export const actions = {};
export const getters = {
  loading: (state) => state.loading,
};
