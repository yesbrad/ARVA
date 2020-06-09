// Action Types
export enum StockistActionTypes {
	Add,
}

/// Stockist Info Base Class
export interface StockistInfo {
	ID: string,
	image64: string,
	title: string
}

export interface AddStockistAction {
	type: typeof StockistActionTypes.Add,
	payload: StockistInfo,
}