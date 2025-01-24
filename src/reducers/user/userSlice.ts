import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "../../global/types";

interface UserState {
  selectedTheme: string,
  allGames: IGame[],
};

const initialState: UserState = {
  selectedTheme: 'yellow',
  allGames: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.selectedTheme = action.payload;
    },
    addGameToList: (state, action: PayloadAction<IGame>) => {
      state.allGames.push(action.payload);
    }
  },
});

export const { setTheme, addGameToList } = userSlice.actions;
export default userSlice.reducer;