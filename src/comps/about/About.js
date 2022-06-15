
import React, {Component} from 'react'
import './About.css'
import about from '../../images/pics/about.png'

class About extends Component
{
	
	render()
	{
		return (
			<section className = 'about py-5 my-5' id = 'about'>
				<div className = 'container'>
					<div className= "row align-items-center">
						<div className = "c col-md-6 col-12">
							<div className = 'left-side text-md-start text-center mb-lg-0 mb-5'>
								<h3 className = 'about-name'><span>H</span>orizon <span>L</span>ogos</h3>
								<p className = 'about-description text-muted'>What we do</p>
								<p className = 'about-text'>Need a logo to represent your company? You want to create an image around your company? The image of your company is very important for your customers, we often underestimate the logo of our company while it is the first element that customers see.</p>
								<button className = 'btn btn-outline-success text-capitalize btn-sm shadow-lg'>read more<i className="ms-2 fas fa-chevron-right"></i></button>
							</div>
						</div>
						<div className = "c col-md-6 col-12">
							<div className = 'right-side text-lg-end text-center'>
								<img className = 'img-fluid w-75 shadow-lg' src = {about} alt = 'about' />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About