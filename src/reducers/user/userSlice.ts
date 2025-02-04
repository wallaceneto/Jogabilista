import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "../../global/types";
import { storeAllGames } from "../../storage/asyncStorage";

interface UserState {
  allGames: IGame[],
};

const initialState: UserState = {
  allGames: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addGameToList: (state, action: PayloadAction<IGame>) => {
      state.allGames = [action.payload, ...state.allGames];
      storeAllGames(state.allGames);
    },
    addFullGameList: (state, action: PayloadAction<IGame[]>) => {
      state.allGames = action.payload;
    },
    removeGame: (state, action: PayloadAction<string>) => {
      state.allGames = state.allGames.filter(game => game.id !== action.payload);
      storeAllGames(state.allGames);
    },
  },
});

export const { addGameToList, addFullGameList, removeGame } = userSlice.actions;
export default userSlice.reducer;