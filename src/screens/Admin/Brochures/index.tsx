import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { User } from '../index';
import { AppState } from '../../../redux/state';
import * as firebase from "firebase/app";
import "firebase/firebase-storage";
import {
	deleteBrochureAction,
	addBrochureAction,
	getBrochuresAction
} from '../../../redux/Brochures/actions';
import { BrochureInfo } from '../../../redux/Brochures/types';

interface IState {
	newBrochureIDInput: string,
	newBrochurePDFInput: FileList | null,
	newBrochureDesriptionInput: string,
	newBrochureTitleInput: string,
	newBrochureImageInput: FileList | null;
	deleting: boolean,
	uploading: boolean,
	error: string,
}

interface IProps {
	addBrochureAction: any,
	deleteBrochureAction: any,
	getBrochuresAction: any,
	user: User
	brochures: BrochureInfo[],
}

class AdminBrochures extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			newBrochureIDInput: 'Name',
			newBrochurePDFInput: null,
			newBrochureDesriptionInput: 'Description',
			newBrochureTitleInput: 'Title',
			newBrochureImageInput: null,
			deleting: false,
			uploading: false,
			error: '',
		};
	}

	componentDidMount() {
		this.props.getBrochuresAction();
	}

	onAddNewBrochure = async () => {
		console.log('Adding New Brochure');
		
		if (this.state.uploading) return;

		this.setState({ uploading: true, error: '' });

		const { newBrochureIDInput, newBrochurePDFInput, newBrochureTitleInput, newBrochureDesriptionInput, newBrochureImageInput } = this.state;

		let takenID: boolean = false;

		this.props.brochures.map((bro) => {
			if (bro.brochureID === newBrochureIDInput) {
				this.setState({ error: 'ID Already Taken', uploading: false });
				takenID = true;
			}
		});

		if (takenID) return;

		if (newBrochurePDFInput === null) {
			this.setState({ error: 'PDF Missing', uploading: false });
			return;
		}

		if (newBrochureImageInput === null) {
			this.setState({ error: 'Image Missing', uploading: false });
			return;
		}

		try {			
			const storageRef = firebase.storage().ref();
			const pdfRef = storageRef.child(`brochures/PDF_${newBrochureIDInput}`);
			await pdfRef.put(newBrochurePDFInput[0]);
			const downloadURL = await pdfRef.getDownloadURL();

			const storageRefImage = firebase.storage().ref();
			const pdfRefImage = storageRefImage.child(`brochures/images/Image_${newBrochureIDInput}`);
			await pdfRefImage.put(newBrochureImageInput[0]);
			const downloadURLImage = await pdfRefImage.getDownloadURL();

			await this.props.addBrochureAction({
				brochureID: newBrochureIDInput,
				brochurePDFURL: downloadURL,
				brochureTitle: newBrochureTitleInput,
				brochureDescription: newBrochureDesriptionInput,
				brochureImageURL: downloadURLImage,
			}, this.props.user);

			console.log("Finshed Adding Brochure")

		} catch (err) {
			console.log(err);
		}

		this.setState({ uploading: false });
	}

	onDeleteBrochure = async (brochure: BrochureInfo) => {
		console.log('Deleting: ' + brochure.brochureID);

		if (this.state.deleting) return;

		this.setState({ deleting: true });

		try {
			await this.props.deleteBrochureAction(brochure, this.props.user)
			console.log('Removed: ' + brochure.brochurePDFURL);
		} catch (err) {
			console.log('Deleting Failed', err)
		}

		this.setState({ deleting: false });
	}

	render() {
		return (
			<div className="admin-container">
				<div className="admin-column">
					<div className="admin-column-input">
						<h1>BROCHURES EDITOR</h1>
						<h3>ID</h3>
						<input value={this.state.newBrochureIDInput} onChange={res => this.setState({ newBrochureIDInput: res.target.value })}></input>
						<h3>Title</h3>
						<input value={this.state.newBrochureTitleInput} onChange={res => this.setState({ newBrochureTitleInput: res.target.value })}></input>
						<h3>Description</h3>
						<input value={this.state.newBrochureDesriptionInput} onChange={res => this.setState({ newBrochureDesriptionInput: res.target.value })}></input>
						<h3>Brochure PDF</h3>
						<input type="file" accept="application/pdf" onChange={res => this.setState({ newBrochurePDFInput: res.target.files as FileList | null })}></input>
						<h3>Brochure IMAGE</h3>
						<input type="file" accept="image/png" onChange={res => this.setState({ newBrochureImageInput: res.target.files as FileList | null })}></input>
						<button onClick={() => this.onAddNewBrochure()}>{this.state.uploading ? 'UPLOADING IN PROGESS' : "Upload"}</button>
						<span>{this.state.error}</span>
					</div>
				</div>
				<div className="admin-column">
					<h3>Current Content</h3>
					<div className="admin-column-content">
						{this.props.brochures && this.props.brochures.map(val => {
							return (
								<div key={val.brochureID} className='admin-data-card'>
									<span>{val.brochureID}</span>
									<button onClick={() => this.onDeleteBrochure(val)}>{this.state.deleting ? "DELETING" : "Delete"}</button>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatch = {
	addBrochureAction: (p: BrochureInfo, user: User) => addBrochureAction(p, user),
	deleteBrochureAction: (p: BrochureInfo, user: User) => deleteBrochureAction(p, user),
	getBrochuresAction: () => getBrochuresAction(),
}

const mapToProps = (state: AppState) => ({
	brochures: state.brochures,
})

export default connect(mapToProps, mapDispatch)(AdminBrochures);