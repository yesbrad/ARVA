import { StockistInfo, AddStockistAction, GetStockistAction, DeleteStockistAction } from './types';
import { Dispatch } from 'redux';
import { apiURL } from '../../api';
import { AppState } from '../state';
import { User } from '../../screens/Admin';
import { ActionTypes } from '../actionTypes';

export const addStockistAction = (info: StockistInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/addStockist', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify({
					ID: info.ID,
					image64: info.image64,
					title: info.title
				}),
			});
		} catch (err) {
			console.log(err);
		}

		dispatch<AddStockistAction>({
			type: ActionTypes.StockAdd,
			payload: {
				ID: info.ID,
				title: info.title,
				image64: info.image64,
			}
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

		dispatch<DeleteStockistAction>({
			type: ActionTypes.StockDelete,
			payload: {
				ID: info.ID,
				title: info.title,
				image64: info.image64,
			}
		});
	})

};


export const getStockistAction = () => {
	return (async (dispatch: Dispatch) => {
		try {
			const val = await fetch('https://us-central1-arva-3193d.cloudfunctions.net/getStockists', {
				method: "GET",
				headers: {
					"Accept": "application/json",
				},
			});

			const jsn = await val.json();

			dispatch<GetStockistAction>({
				type: ActionTypes.StockGet,
				payload: jsn.stockists
			});
		} catch (err) {
			console.log(err);
		}
	})
};