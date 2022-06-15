
import React, { Component } from 'react'
import './Contact.css'
import CorrectIcon from "../../images/icons/correct.png"
import InCorrectIcon from "../../images/icons/incorrect.png"

class Contact extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			message: "",
			subject: "",
			email: "",

			touched: {
				email: false,
				firstName: false,
				lastName: false,
				message: false,
				subject: false
			}
		};
	}
	//simple validation to check css functionality for the inputs
	validate = (email, firstName, lastName, message, subject) => {
		return {
			firstName: firstName.length === 0,
			lastName: lastName.length === 0,
			message: message.length === 0,
			subject: subject.length === 0,
			email: email.length === 0
		};
	}

	// handle the input change events
	handleEmailChange = evt => {
		this.setState({ email: evt.target.value });
	};

	handleSubjectChange = evt => {
		this.setState({ subject: evt.target.value });
	};

	handleFirstnameChange = evt => {
		this.setState({ firstName: evt.target.value });
	}

	handleLastNameChange = evt => {
		this.setState({ lastName: evt.target.value });
	}

	handleMessageChange = evt => {
		this.setState({ message: evt.target.value });
	}

	handleBlur = field => evt => {
		this.setState({
			touched: { ...this.state.touched, [field]: true }
		});
	};

	handleSubmit = evt => {
		if (!this.canBeSubmitted()) {
			evt.preventDefault();
			return;
		}
		const { email, firstName, lastName, subject, message } = this.state;
		alert(`Contacted with Firstname: ${firstName}  Lastname: ${lastName} email: ${email} Subject: ${subject} message: ${message}`);
	};

	canBeSubmitted() {
		const errors = this.validate(this.state.email, this.state.firstName, this.state.lastName, this.state.message, this.state.subject);
		const isDisabled = Object.keys(errors).some(x => errors[x]);
		return !isDisabled;
	}

	render() {
		const errors = this.validate(this.state.email, this.state.firstName, this.state.lastName, this.state.message, this.state.subject);
		const isDisabled = Object.keys(errors).some(x => errors[x]);

		const shouldMarkError = field => {
			const hasError = errors[field];
			const shouldShow = this.state.touched[field];

			return hasError ? shouldShow : false;
		};


		return (
			<section className='faq py-5 mb-5' id='contact'>
				<div className='container'>
					<div className='title'>
						<h2 className='text-capitalize text-center mb-5 position-relative p-3'>Contact Us</h2>
					</div>
					<form className='myForm' onSubmit={this.handleSubmit}>
						<div className="contact">
							<input
								className={shouldMarkError("firstName") && this.state.touched["firstName"] ? "error" : this.state.touched["firstName"] ? "success" : null}
								type="text"
								placeholder="Enter First Name"
								value={this.state.firstname}
								onChange={this.handleFirstnameChange}
								onBlur={this.handleBlur("firstName")}
							/>

							{shouldMarkError("firstName") && this.state.touched["firstName"] ? <img src={InCorrectIcon} class="icon"></img> : ""}
							{!shouldMarkError("firstName") && this.state.touched["firstName"] ? <img src={CorrectIcon} class="icon"></img> : ""}

							<input
								className={shouldMarkError("lastName") && this.state.touched["lastName"] ? "error" : this.state.touched["lastName"] ? "success" : null}
								type="text"
								placeholder="Enter Last Name"
								value={this.state.lastName}
								onChange={this.handleLastNameChange}
								onBlur={this.handleBlur("lastName")}
							/>

							{shouldMarkError("lastName") && this.state.touched["lastName"] ? <img src={InCorrectIcon} class="icon"></img> : ""}
							{!shouldMarkError("lastName") && this.state.touched["lastName"] ? <img src={CorrectIcon} class="icon"></img> : ""}

							<input
								className={shouldMarkError("email") && this.state.touched["email"] ? "error" : this.state.touched["email"] ? "success" : null}
								type="text"
								placeholder="Enter Email"
								value={this.state.email}
								onChange={this.handleEmailChange}
								onBlur={this.handleBlur("email")}
							/>

							{shouldMarkError("email") && this.state.touched["email"] ? <img src={InCorrectIcon} class="icon"></img> : ""}
							{!shouldMarkError("email") && this.state.touched["email"] ? <img src={CorrectIcon} class="icon"></img> : ""}

							<input
								className={shouldMarkError("subject") && this.state.touched["subject"] ? "error" : this.state.touched["subject"] ? "success" : null}
								type="subject"
								placeholder="Enter subject"
								value={this.state.subject}
								onChange={this.handleSubjectChange}
								onBlur={this.handleBlur("subject")}
							/>

							{shouldMarkError("subject") && this.state.touched["subject"] ? <img src={InCorrectIcon} class="icon"></img> : ""}
							{!shouldMarkError("subject") && this.state.touched["subject"] ? <img src={CorrectIcon} class="icon"></img> : ""}
							
							<textarea
								className={'message ' + (shouldMarkError("message") && this.state.touched["message"] ? "error" : this.state.touched["message"] ? "success" : null)}
								type="message"
								placeholder="Enter message"
								value={this.state.message}
								onChange={this.handleMessageChange}
								onBlur={this.handleBlur("message")}
								
							/>
								{shouldMarkError("message") && this.state.touched["message"] ? <img src={InCorrectIcon} class="textAreaIcon"></img> : ""}
								{!shouldMarkError("message") && this.state.touched["message"] ? <img src={CorrectIcon} class="textAreaIcon"></img> : ""}
						</div>
						<button disabled={isDisabled} className='btn btn-outline-success btn-sm text-capitalize'>Submit<i className="ms-2 fas fa-chevron-right"></i></button>
					</form>
				</div>
			</section>
		);

	}
}

export default Contact