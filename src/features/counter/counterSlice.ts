import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  count_1: {
    val: number;
  };
  count_2: {
    val: number;
  };
}

const initialState: CounterState = {
  count_1: {
    val: 0,
  },
  count_2: {
    val: 0,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state, action: PayloadAction<keyof CounterState>) => {
      state[action.payload].val += 1;
    },
    decrement: (state, action: PayloadAction<keyof CounterState>) => {
      state[action.payload].val -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount1 = (state: RootState) => {
  console.log("select count_1");
  return state.counter.count_1.val;
};

const veryHeavyFunction = (count: number) => {
  console.log("very very heavy function");
  // 何かとても重い処理
  return count;
};

export const selectCount2 = createSelector(
  (state: RootState) => state.counter.count_2,
  (count_2) => {
    console.log("select count_2");
    return veryHeavyFunction(count_2.val)
  }
);

export default counterSlice.reducer;
