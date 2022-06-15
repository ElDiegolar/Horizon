
import React, { Component } from 'react'
import './CreateALogo.css'
import { LogosData } from '../helpers/Data'
import { createClient } from 'pexels';
//simple image api to 'create logos' with
const client = createClient(process.env.REACT_APP_PEXEL_API_KEY);

class CreateALogo extends Component {

	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			message: "",
			subject: "",
			email: "",
			photoFromPexelApi: [],
			category: "",
			touched: {
				email: false,
				firstName: false,
				lastName: false,
				message: false,
				subject: false
			}
		};
	}

	handleCategoryChange = (event) => {
		this.setState({ category: event.target.value });
	}

	generateLogo = () => {

		const query = this.state.category;
		if (query) {
			client.photos.search({ query, per_page: 1 }).then(photo => {
				if (photo) {
					let item = (
						<div className='c col-lg-12 col-3 mb-12' key={Math.random()}>
							<div className='card shadow-lg'>
								<img className='card-img-top' src={photo.photos[0].src.original} alt={photo.alt} />
								<div className='card-body'>
									<p>Your newly generated company logo...</p>
								</div>
							</div>
						</div>
					)

					this.setState({ photoFromPexelApi: item });
				} else {} // no photo returned from api 
			})
		}

		else {
			return null;
		};

		let items = LogosData.map(item => {
			return (
				<div className={`c col-12 ${item.mar}`} key={Math.random()}>
					<div className='card shadow-lg'>
						<img className='card-img-top' src={item.img.default} alt={item.alt} />
						<div className='card-body'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
							<button className='btn btn-outline-success btn-sm text-capitalize'>read more<i className="ms-2 fas fa-chevron-right"></i></button>
						</div>
					</div>
				</div>
			)
		})
		
		return items
	}

	render() {
		return (
			<section className='createALogo py-5 text-dark  mb-5'>
				<div className='container shadow-lg'>
				<div className='row p-3'></div>
					<div className='row p-3'>
						<div className='c col-lg-6 col-12'>
							<div className='left-side text-md-start text-center mb-lg-0 mb-3'>
								<h5 className='title text-capitalize'>Create a logo easily with a single click.<i className=" ms-2 fas fa-users"></i></h5>
							</div>
						</div>
						<div className='c col-lg-6 col-12'>
							<div className='row'>
								<div className='input col-lg-8 col-12 mb-lg-0 mb-3'>
									<input className='w-100 h-100 p-3  text-md-start text-center' onChange={this.handleCategoryChange} type='text' placeholder='Enter a category...' />
								</div>
								<div className='sub-button col-lg-4 col-12'>
									<button className='w-100 h-100 btn btn-outline-success zoom' onClick={this.generateLogo}>Create</button>
								</div>
							</div>
						</div>
					</div>
					<div className='row p-3'>
						{this.state.photoFromPexelApi}
					</div>
				</div>
			</section>
		)
	}
}

export default CreateALogo