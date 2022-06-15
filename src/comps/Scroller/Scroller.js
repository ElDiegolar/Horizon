

import React, {Component} from 'react'
import './Scroller.css'

class Scroller extends Component
{
	state = {s: false}

    isScrolling = _ =>
    {
        (window.scrollY >= 300) ? this.setState({s: true}): this.setState({s: false})
    }

    handleClick = _ =>
    {
        window.scroll(0, 0)
    }

    componentDidMount()
    {
        window.addEventListener('scroll', event =>
        {
            this.isScrolling()
        })

        document.addEventListener('DOMContentLoaded', event =>
        {
            this.isScrolling()
        })
    }

	render()
	{
		return (
			<button className = {`btn btn-success rounded-circle btn-sm position-fixed ${this.state.s ? 'd-block': 'd-none'}`} id = 'btn-up' onClick = {this.handleClick}><i className="fas fa-arrow-up"></i></button>

		)
	}
}

export default Scroller