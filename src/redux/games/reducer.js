import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    currentGame: null,
  },
  reducers: {
    //визначаємо екшени

    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
