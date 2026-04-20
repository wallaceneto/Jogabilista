import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame, IGroup } from "../../global/types";
import { storeAllGames } from "../../storage/asyncStorage";
import { storeAllGroups } from "../../storage/asyncStorage/storeAllGroups";

interface UserState {
  allGames: IGame[],
  allGroups: IGroup[]
};

const initialState: UserState = {
  allGames: [],
  allGroups: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Games ----
    addGameToList: (state, action: PayloadAction<IGame>) => {
      state.allGames = [action.payload, ...state.allGames];
      storeAllGames(state.allGames);
    },
    addFullGameList: (state, action: PayloadAction<IGame[]>) => {
      state.allGames = action.payload;
      storeAllGames(state.allGames);
    },
    removeGame: (state, action: PayloadAction<string>) => {
      state.allGames = state.allGames.filter(game => game.id !== action.payload);
      storeAllGames(state.allGames);
    },
    updateGame: (state, action: PayloadAction<IGame>) => {
      let games: IGame[] = [];

      state.allGames.forEach(game => {
        if (game.id === action.payload.id) {
          games.push(action.payload);
        } else {
          games.push(game);
        }
      });

      state.allGames = games;
      storeAllGames(state.allGames);
    },
    // Groups ----
    addGroup: (state, action: PayloadAction<IGroup>) => {
      state.allGroups = [action.payload, ...state.allGroups];
      storeAllGroups(state.allGroups);
    },
    addFullGroupList: (state, action: PayloadAction<IGroup[]>) => {
      state.allGroups = action.payload;
      storeAllGroups(state.allGroups);
    },
    removeGroup: (state, action: PayloadAction<string>) => {
      state.allGroups = state.allGroups.filter(group => group.id !== action.payload);
      storeAllGroups(state.allGroups);
    },
    updateGroup: (state, action: PayloadAction<IGroup>) => {
      let groups: IGroup[] = [];

      state.allGroups.forEach(group => {
        if (group.id === action.payload.id) {
          groups.push(action.payload);
        } else {
          groups.push(group);
        }
      });

      state.allGroups = groups;
      storeAllGroups(state.allGroups);
    },
  },
});

export const {
  addGameToList,
  addFullGameList,
  removeGame,
  updateGame,
  addGroup,
  addFullGroupList,
  removeGroup,
  updateGroup
} = userSlice.actions;
export default userSlice.reducer;