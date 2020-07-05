import { ActionTypes } from "../actionTypes";
import { IAction } from "../state";

/// Stockist Info Base Class
export interface StockistInfo {
	ID: string,
	name: string,
	website: string,
	address: string,
	state: string,
}

export interface IStockState {
	stockists: StockistInfo[], 
}

export interface AddStockistAction extends IAction {
	type: typeof ActionTypes.StockAdd,
	payload: StockistInfo[],
}

export interface DeleteStockistAction extends IAction {
	type: typeof ActionTypes.StockDelete,
	payload: StockistInfo,
}

export interface GetStockistAction extends IAction {
	type: typeof ActionTypes.StockGet,
	payload: StockistInfo[],
}
export type StockistActionTypes = AddStockistAction | GetStockistAction | DeleteStockistAction;