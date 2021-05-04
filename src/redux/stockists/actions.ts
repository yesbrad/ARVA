import { StockistInfo, AddStockistAction, GetStockistAction, DeleteStockistAction } from './types';
import { Dispatch } from 'redux';
import { apiURL } from '../../api';
import { AppState } from '../state';
import { User } from '../../screens/Admin';
import { ActionTypes } from '../actionTypes';
import { exception } from 'console';

export const addStockistAction = (info: StockistInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			const res = await fetch(apiURL + '/addStockist', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(info),
			});

			if (res.status === 500)
				throw 500;
			
			console.log("Just Pushed this Stockist", info);

			dispatch<AddStockistAction>({
				type: ActionTypes.StockAdd,
				payload: info
			});

		} catch (err) {
			console.log(err);
		}


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

		dispatch<DeleteStockistAction>({
			type: ActionTypes.StockDelete,
			payload: info
		});
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

		console.log('Stockists', jsn);

		dispatch<GetStockistAction>({
			type: ActionTypes.StockGet,
			payload: jsn.stockists
		});
	} catch (err) {
		console.log(err);
	}
};


export const getStockistAction = () => {
	return (async (dispatch: Dispatch) => {
		try {
			console.log('About to get Stockists');

			const val = await fetch(`${apiURL}/getStockistsAll`, {
				method: "GET",
				headers: {
					"Accept": "application/json",
				},
			});

			const jsn = await val.json();
			console.log('Stockists', jsn);

			dispatch<GetStockistAction>({
				type: ActionTypes.StockGet,
				payload: jsn.stockists
			});
		} catch (err) {
			console.log(err);
		}
	})
};