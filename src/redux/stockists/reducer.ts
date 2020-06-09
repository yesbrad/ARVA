import { StockistTypes, StockistActionTypes  } from "./types";
import { AppState, DefaultState } from "../state";

export const stockistReducer = (state: AppState = DefaultState, action: StockistActionTypes): AppState => {
	console.log("NewStockistInfo: ", action.payload)
	switch (action.type) {
		case StockistTypes.Add:
			return {
				stockists: [...state.stockists, action.payload],
			}
		case StockistTypes.Get:
			return {
				stockists: [...action.payload],
			}
		default: return state;
	}
}