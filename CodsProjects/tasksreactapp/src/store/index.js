import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 10;
    },
    decrement(state, action) {
      state.counter -= 10;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;

// import { createStore } from "redux";

// const reducerFn = (state = { counter: 10 }, action) => {
//   if (action.type === "Incr") {
//     return { counter: (state.counter += 10) };
//   }

//   if (action.type === "Dicr") {
//     return { counter: (state.counter -= 10) };
//   }

//   if (action.type === "AddBy") {
//     return { counter: state.counter + action.payload };
//   }
//   return state;
// };

// const store = createStore(reducerFn);

// export default store;
