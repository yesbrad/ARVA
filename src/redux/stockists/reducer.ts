import { StockistActionTypes, AddStockistAction  } from "./types";
import { AppState, DefaultState } from "../state";

export const stockistReducer = (state: AppState = DefaultState, action: AddStockistAction): AppState => {
	console.log("NewStockistInfo: ", action.payload)
	switch (action.type) {
		case StockistActionTypes.Add:
			return {
				stockists: [...state.stockists, action.payload],
			}
		default: return state;
	}
}