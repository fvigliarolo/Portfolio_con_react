import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'


const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm(
          'service_j2hfkld','template_ykfq5hl', form.current, '-uckdaNraHs66a6IE')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

    return(
        <>
             <div className="container about-page">
                    <div className="text-zone">
                        <h1>Contact me</h1>
                        <p>
                            I am interested in freelance opportunities - especially ambitious or
                            large projects. However, if you have other request or question,
                            don't hesitate to contact me using below form either.
                        </p>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <ul>
                                    <li className="half">
                                    <input placeholder="Name" type="text" name="from_name" id="from_name" required />
                                    </li>
                                    <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="from_name"
                                        id="from_name"
                                        required
                                    />
                                    </li>
                                    <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                    </li>
                                    <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                    </li>
                                    <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                    </li>
                                </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact