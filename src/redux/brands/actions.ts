import { Dispatch } from 'redux';
import { apiURL } from '../../api';
import { User } from '../../screens/Admin';
import { BrandInfo, GetBrandsAction, DeleteBrandAction, AddBrandAction } from './types';
import { ActionTypes } from '../actionTypes';

export const addBrandAction = (info: BrandInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/addBrand', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(info),
			});

			dispatch<AddBrandAction>({
				type: ActionTypes.BrandAdd,
				payload: info
			});
		} catch (err) {
			console.log(err);
		}
	})
};

export const deleteBrandAction = (info: BrandInfo, user: User) => {
	return (async (dispatch: Dispatch) => {
		try {
			await fetch(apiURL + '/removeBrand', {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(info),
			});

			dispatch<DeleteBrandAction>({
				type: ActionTypes.BrandDelete,
				payload: info
			});
		} catch (err) {
			console.log(err);
		}
	})
};

export const getBrandAction = () => {
	return (async (dispatch: Dispatch) => {
		try {
			const val = await fetch(apiURL + '/getBrands', {
				method: "GET",
				headers: {
					"Accept": "application/json",
				},
			});

			const jsn = await val.json();

			dispatch<GetBrandsAction>({
				type: ActionTypes.BrandGet,
				payload: jsn.brands
			});

		} catch (err) {
			console.log(err);
		}
	})
};