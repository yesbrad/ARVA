import { StockistActionTypes, StockistInfo, AddStockistAction } from './types';
import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { AppState } from '../state';
import { apiURL } from '../../api';

export const addStockistAction = (info: StockistInfo) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/addStockist', {
				method: "POST",
				headers: {
					"Accept": "application/json",
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
			type: StockistActionTypes.Add,
			payload: {
				ID: info.ID,
				title: info.title,
				image64: info.image64,
			}
		});
	})

};