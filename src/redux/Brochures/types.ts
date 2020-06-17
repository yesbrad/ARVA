import { ActionTypes } from "../actionTypes";
import { IAction } from "../state";

///  Brochure Info Base Class
export interface BrochureInfo {
	brochureID: string,
	brochurePDFURL: string,
	brochureTitle: string,
	brochureDescription: string,
	brochureImageURL: string,
}

export interface IBrochureState {
	stockists: BrochureInfo[], 
}

export interface AddBrochureAction extends IAction {
	type: typeof ActionTypes.BrochureAdd,
	payload: BrochureInfo,
}

export interface DeleteBrochureAction extends IAction {
	type: typeof ActionTypes.BrochureDelete,
	payload: BrochureInfo,
}

export interface GetBrochureAction extends IAction {
	type: typeof ActionTypes.BrochureGet,
	payload: BrochureInfo[],
}