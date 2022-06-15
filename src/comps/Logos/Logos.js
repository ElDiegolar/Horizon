
import React, { Component } from 'react'
import './Logos.css'
import { LogosData } from '../helpers/Data'

class Logos extends Component {
	displayLogos = _ => {
		let items = LogosData.map(item => {
			return (
				<div className='c col-lg-6 col-3 mb-12' key={Math.random()}>
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
			<section className='faq py-5 mb-5' id='logos'>
				<div className='container'>
					<div className='title'>
						<h2 className='text-capitalize text-center mb-5 position-relative p-3'>Logos</h2>
					</div>
					<div className='row'>
						<div className='row'>
							{this.displayLogos()}
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Logos