import { StockistInfo } from "./stockists/types";
import { BrandInfo } from "./brands/types";
import { ActionTypes } from "./actionTypes";
import { NewProductInfo } from "./newProducts/types";

export const DefaultState: AppState = {
	stockists: [],
	brands: [],
	newProducts: []
}

export interface AppState {
	stockists: StockistInfo[];
	brands: BrandInfo[]
	newProducts: NewProductInfo[]
}

export interface IAction {
	type: ActionTypes,
	payload: any,
}