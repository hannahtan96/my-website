import { FormEvent, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { AnyRecord } from 'dns';

const Contact = () => {

	const [buttonValue, setButtonValue] = useState('Send Email');
	const [successMessage, setSuccessMessage] = useState('')
	const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
	
	const handleSubmit = (event: any) => {
		console.log(typeof(event))
		event.preventDefault();
    setButtonValue('Sending...');

		const serviceID = 'service_tbdruox';
    const templateID = 'template_uj462z8';

		emailjs.init("R63GNn71flyYPX44d");

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        setButtonValue('Send Email');
        setSuccessMessage('Your message has been sent. Thank you!');
      })
      .catch((err) => {
        setButtonValue('Send Email');
				setSuccessMessage('');
        alert(JSON.stringify(err));
      })
			.finally(() => {
				setSubject('');
        setName('');
        setEmail('');
        setMessage('');
				event.target.reset();
			})
	}

	return (
		<section
			className="paralax-mf bg-image sect-mt2 route"
		>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="contact-mf">
							<div id="contact" className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="title-box-2">
											<h5 className="title-left">Send Me A Message</h5>
										</div>
										<div>
											<form id="form" onSubmit={handleSubmit} className="contactForm">
												<div className="row">
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input
																type="text"
																name="name"
																className="form-control"
																id="name"
																placeholder="Your Name"
															/>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input
																type="email"
																className="form-control"
																name="email"
																id="email"
																placeholder="Your Email"
																data-rule="email"
																data-msg="Please enter a valid email"
															/>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input
																type="text"
																className="form-control"
																name="subject"
																id="subject"
																placeholder="Subject"
															/>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<textarea
																className="form-control"
																name="message"
																rows={5}
																data-rule="required"
																data-msg="Please write something for us"
																placeholder="Message"
															></textarea>
															<div className="validation"></div>
														</div>
													</div>
													<div className="col-md-12">
														<button
															type="submit"
															className="button button-a button-big button-rouded"
														>
															Send Message
														</button>
													</div>
													{successMessage && <p>{successMessage}</p>}
												</div>
											</form>
										</div>
									</div>
									<div className="col-md-6">
										<div className="title-box-2 pt-4 pt-md-0">
											<h5 className="title-left">Get in Touch</h5>
										</div>
										<div className="more-info">
											<p className="lead">
												Whether you want to get in touch, talk about a project
												collaboration, or just say hi, I'd love to hear from
												you.
												<br />
												Simply fill the from and send me an email.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="copyright-box">
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}

export default Contact;