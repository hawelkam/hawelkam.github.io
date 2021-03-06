import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class ContactForm extends Component {
    state = {
        formEmailSent: false,
        senderEmail: '',
        senderName: '',
        message: ''
    }

    handleSubmit (event) {
        event.preventDefault()
        const {
          REACT_APP_EMAILJS_TEMPLATEID: template,
          REACT_APP_EMAILJS_USERID: user
        } = process.env

        this.sendFeedback(
          template,
          this.state.senderEmail,
          this.state.senderName,
          this.state.message,
          user
        )

        this.setState({
          formSubmitted: true
        })
    }

    sendFeedback (templateId, senderEmail, senderName, message, user) {
        window.emailjs.send(
            'default_service', // default email provider in your EmailJS account
            templateId,
            {
            senderEmail,
            senderName,
            message
            },
            user
        ).then(res => {
            this.setState({ formEmailSent: true })
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
                <Form className="contact-form" onSubmit={(e) => this.handleSubmit(e)}>
                {this.state.formEmailSent ? 
                    (<p>Your message has been sent!</p>) : 
                    (
                        <>
                            <Form.Group controlId="form.name">
                                <Form.Control required type="text" name="senderName" placeholder="Name..." value={this.state.senderName} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="form.email">
                                <Form.Control required type="email" name="senderEmail" placeholder="Email..." value={this.state.senderEmail} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="form.message">
                                <Form.Control required as="textarea"  name="message" placeholder="Type your message..." rows="6" value={this.state.message} onChange={this.handleChange}/>
                            </Form.Group>
                            <Button variant="secondary" type="submit" className="mh-button">
                                Submit
                            </Button>
                        </>
                    )
                }
                </Form>
        )
    }
}
