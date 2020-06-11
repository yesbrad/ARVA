import { ActionTypes } from "../actionTypes";
import { IAction } from "../state";

/// Brands Info Base Class
export interface BrandInfo {
	brandID: string
	brandImage: string,
}

export interface IBrandState {
	brands: BrandInfo[],
}

export interface AddBrandAction extends IAction {
	type: typeof ActionTypes.BrandAdd,
	payload: BrandInfo,
}

export interface DeleteBrandAction extends IAction {
	type: typeof ActionTypes.BrandDelete,
	payload: BrandInfo,
}

export interface GetBrandsAction extends IAction {
	type: typeof ActionTypes.BrandGet,
	payload: BrandInfo[],
}
export type BrandActionTypes = AddBrandAction | DeleteBrandAction | GetBrandsAction;