import { StockistTypes, StockistInfo, AddStockistAction, GetStockistAction } from './types';
import { Dispatch } from 'redux';
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
			type: StockistTypes.Add,
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
			console.log('fetch');
			const val = await fetch('https://us-central1-arva-3193d.cloudfunctions.net/getStockists', {
				method: "GET",
				headers: {
					"Accept": "application/json",
				},
			});

			const jsn = await val.json();
			console.log(jsn.stockists);

			dispatch<GetStockistAction>({
				type: StockistTypes.Get,
				payload: jsn.stockists
			});

		} catch (err) {
			console.log(err);
		}



	})

};