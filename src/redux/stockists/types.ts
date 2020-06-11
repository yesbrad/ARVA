// Action Types
export enum StockistTypes {
	Add,
	Get,
	Delete,
}

/// Stockist Info Base Class
export interface StockistInfo {
	ID: string,
	image64: string,
	title: string
}

export interface AddStockistAction {
	type: typeof StockistTypes.Add,
	payload: StockistInfo,
}

export interface DeleteStockistAction {
	type: typeof StockistTypes.Delete,
	payload: StockistInfo,
}

export interface GetStockistAction {
	type: typeof StockistTypes.Get,
	payload: StockistInfo[],
}
export type StockistActionTypes = AddStockistAction | GetStockistAction | DeleteStockistAction;