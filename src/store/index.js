import { createStore } from "vuex";

export default createStore({
  state: {
    user: { name: "Hasan", id: 123 },
    events: [],
  },
  mutations: {
    EVENTS_DATA(state, events) {
      state.events = events;
    },
    // INCREMENT_COUNT(state, value) {
    //   state.count += value;
    // },
  },
  actions: {
    loadEvent({ commit }) {
      fetch("http://localhost:3000/events")
        .then((res) => res.json())
        .then((data) => {
          commit("EVENTS_DATA", data);
        });
    },
    // updateCount({ state, commit }, value) {
    //   if (state.user) {
    //     commit("INCREMENT_COUNT", value);
    //   }
    // },
  },
  modules: {},
  getters: {
    // hobLength: (state) => {
    //   return state.hobbies.length;
    // },
    // doneTodos: (state) => {
    //   return state.todos.filter((todo) => todo.done);
    // },
    // activeTodos: (state, getters) => {
    //   return state.todos.length - getters.doneTodos.length;
    // },
    // getTodoById: (state) => (id) => {
    //   return state.todos.find((todo) => todo.id == id);
    // },
  },
});
