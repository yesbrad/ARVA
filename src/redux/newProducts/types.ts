import { ActionTypes } from "../actionTypes";
import { IAction } from "../state";

///  NewProduct Info Base Class
export interface NewProductInfo {
	newProductID: string,
	newProductImage: string,
	newProductName: string,
	newProductDescription: string
}

export interface INewProductState {
	stockists: NewProductInfo[], 
}

export interface AddNewProductAction extends IAction {
	type: typeof ActionTypes.ProductAdd,
	payload: NewProductInfo,
}

export interface DeleteNewProductAction extends IAction {
	type: typeof ActionTypes.ProductDelete,
	payload: NewProductInfo,
}

export interface GetNewProductAction extends IAction {
	type: typeof ActionTypes.ProductGet,
	payload: NewProductInfo[],
}