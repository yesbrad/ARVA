import { NewProductInfo, AddNewProductAction, DeleteNewProductAction, GetNewProductAction } from './types';
import { Dispatch } from 'redux';
import { apiURL } from '../../api';
import { User } from '../../screens/Admin';
import { ActionTypes } from '../actionTypes';

export const addNewProductAction = (info: NewProductInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/addProduct', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(info),
			});

			dispatch<AddNewProductAction>({
				type: ActionTypes.ProductAdd,
				payload: info
			});
		} catch (err) {
			console.log(err);
		}
	})
};

export const deleteNewProductAction = (info: NewProductInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/removeProducts', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(info),
			});

			dispatch<DeleteNewProductAction>({
				type: ActionTypes.ProductDelete,
				payload: info
			});
		} catch (err) {
			console.log(err);
		}
	})
};


export const getNewProductsAction = () => {
	return (async (dispatch: Dispatch) => {
		try {
			const val = await fetch(apiURL + '/getProducts', {
				method: "GET",
				headers: {
					"Accept": "application/json",
				},
			});

			const jsn = await val.json();

			dispatch<GetNewProductAction>({
				type: ActionTypes.ProductGet,
				payload: jsn.newProducts
			});
		} catch (err) {
			console.log(err);
		}
	})
};