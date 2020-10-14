import { StockistInfo, AddStockistAction, GetStockistAction, DeleteStockistAction } from './types';
import { Dispatch } from 'redux';
import { apiURL } from '../../api';
import { AppState } from '../state';
import { User } from '../../screens/Admin';
import { ActionTypes } from '../actionTypes';

export const addStockistAction = (info: StockistInfo[], user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/addStockist', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify({ stockists: info } ),
			});
		} catch (err) {
			console.log(err);
		}

		dispatch<AddStockistAction>({
			type: ActionTypes.StockAdd,
			payload: info,
		});
	})

};

export const deleteStockistAction = (info: StockistInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/removeStockist', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify({
					ID: info.ID,
				}),
			});
		} catch (err) {
			console.log(err);
		}

		// dispatch<DeleteStockistAction>({
		// 	type: ActionTypes.StockDelete,
		// 	payload: {
		// 		ID: info.ID,
		// 		title: info.title,
		// 		imageURI: info.imageURI,
		// 	}
		// });
	})

};


export const getStockistActionTwo = async (dispatch: Dispatch) => {
	try {
		const val = await fetch(`${apiURL}/getStockistsAll`, {
			method: "GET",
			headers: {
				"Accept": "application/json",
			},
		});

		const jsn = await val.json();

		console.log(jsn.stockists.stockists);

		dispatch<GetStockistAction>({
			type: ActionTypes.StockGet,
			payload: jsn.stockists.stockists
		});
	} catch (err) {
		console.log(err);
	}
};


export const getStockistAction = () => {
	return (async (dispatch: Dispatch) => {
		try {
			const val = await fetch(`${apiURL}/getStockistsAll`, {
				method: "GET",
				headers: {
					"Accept": "application/json",
				},
			});

			const jsn = await val.json();

			console.log(jsn.stockists.stockists);

			dispatch<GetStockistAction>({
				type: ActionTypes.StockGet,
				payload: jsn.stockists.stockists
			});
		} catch (err) {
			console.log(err);
		}
	})
};