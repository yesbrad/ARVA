import { StockistInfo } from "./stockists/types";
import { BrandInfo } from "./brands/types";
import { ActionTypes } from "./actionTypes";
import { NewProductInfo } from "./newProducts/types";
import { BrochureInfo } from "./Brochures/types";

export const DefaultState: AppState = {
	stockists: [],
	brands: [],
	newProducts: [],
	brochures: [],
}

export interface AppState {
	stockists: StockistInfo[],
	brands: BrandInfo[],
	newProducts: NewProductInfo[],
	brochures: BrochureInfo[],
}

export interface IAction {
	type: ActionTypes,
	payload: any,
}