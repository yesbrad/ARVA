import { StockistInfo } from "./stockists/types";

export const DefaultState: AppState = {
	stockists: [],
}

export interface AppState {
	stockists: StockistInfo[];
}