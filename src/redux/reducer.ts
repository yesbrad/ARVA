import { StockistActionTypes, IStockState  } from "./stockists/types";
import { ActionTypes } from "./actionTypes";
import { BrandActionTypes, BrandInfo, IBrandState  } from "./brands/types";
import { IAction, AppState, DefaultState } from "./state";

export const reducer = (state: AppState = DefaultState, action: IAction) => {
	switch (action.type) {
		case ActionTypes.StockAdd:
			return {
				...state,
				stockists: action.payload,
			}
		case ActionTypes.StockGet:
			return {
				...state,
				stockists: [...action.payload],
			}
		case ActionTypes.StockDelete: 
			return {
				...state,
				stockists: state.stockists.filter(info => info.ID != action.payload.ID)
			}
		case ActionTypes.BrandAdd:
			return {
				...state,
				brands: [...state.brands, action.payload],
			}
		case ActionTypes.BrandGet:
			return {
				...state,
				brands: [...action.payload],
			}
		case ActionTypes.BrandDelete: 
			return {
				...state,
				brands: state.brands.filter(info => info.brandID != action.payload.brandID)
			}
		case ActionTypes.ProductAdd:
			return {
				...state,
				newProducts: [...state.newProducts, action.payload],
			}
		case ActionTypes.ProductGet:
			return {
				...state,
				newProducts: [...action.payload],
			}
		case ActionTypes.ProductDelete: 
			return {
				...state,
				newProducts: state.newProducts.filter(info => info.newProductID != action.payload.newProductID)
			}
		case ActionTypes.BrochureAdd:
			return {
				...state,
				brochures: [...state.brochures, action.payload],
			}
		case ActionTypes.BrochureGet:
			return {
				...state,
				brochures: [...action.payload],
			}
		case ActionTypes.BrochureDelete: 
			return {
				...state,
				brochures: state.brochures.filter(info => info.brochureID != action.payload.brochureID)
			}
		default: return state;
	}
}