import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "../../global/types";
import { storeAllGames } from "../../storage/asyncStorage";

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
      let games: IGame[] = [];
      games.push(action.payload);
      games.push(...state.allGames);
      state.allGames = games;

      storeAllGames(state.allGames);
    },
    addFullGameList: (state, action: PayloadAction<IGame[]>) => {
      state.allGames = action.payload;
    },
    removeGame: (state, action: PayloadAction<string>) => {
      let games: IGame[] = [];
      state.allGames.forEach(game => {
        if (game.id !== action.payload) {
          games.push(game);
        } else {
          console.log('Removing game:');
          console.log(game);
        }
      });
      state.allGames = games;

      storeAllGames(state.allGames);
    },
  },
});

export const { setTheme, addGameToList, addFullGameList, removeGame } = userSlice.actions;
export default userSlice.reducer;