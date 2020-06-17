import { BrochureInfo, AddBrochureAction, DeleteBrochureAction, GetBrochureAction } from './types';
import { Dispatch } from 'redux';
import { apiURL } from '../../api';
import { User } from '../../screens/Admin';
import { ActionTypes } from '../actionTypes';

export const addBrochureAction = (info: BrochureInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/addBrochure', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(info),
			});

			dispatch<AddBrochureAction>({
				type: ActionTypes.BrochureAdd,
				payload: info
			});
		} catch (err) {
			console.log(err);
		}
	})
};

export const deleteBrochureAction = (info: BrochureInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/removeBrochure', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(info),
			});

			dispatch<DeleteBrochureAction>({
				type: ActionTypes.BrochureDelete,
				payload: info
			});
		} catch (err) {
			console.log(err);
		}
	})
};


export const getBrochuresAction = () => {
	return (async (dispatch: Dispatch) => {
		try {
			const val = await fetch(apiURL + '/getBrochures', {
				method: "GET",
				headers: {
					"Accept": "application/json",
				},
			});

			const jsn = await val.json();

			dispatch<GetBrochureAction>({
				type: ActionTypes.BrochureGet,
				payload: jsn.newBrochures
			});
		} catch (err) {
			console.log(err);
		}
	})
};