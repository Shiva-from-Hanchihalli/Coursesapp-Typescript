import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import Footer from './Footer';
// import { Button } from 'react-bootstrap';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_7bmkd5p', 'template_nv81g3e', e.target as HTMLFormElement, 'baGNdiLvMH9olYzXa')
            .then((result) => {
                console.log('Success:', result.text);  
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); 
            }, (error) => {
                console.error('Error:', error.text);  
                setStatus('Failed to send message.');
            });
    };

    return (
        <>
            <div className="contact-container" >
            <div  className="letsconnect"style={{marginBottom:'30%'}}>
            
                    {/* <h2 style={{marginTop:'10%', color:'white'}}>Let's connect</h2>
                    <p style={{paddingRight:'1rem',color:'violet'}}>Now it's time to tell the whole world about your business.</p> */}
                </div>
                <div className="contact-form">
                    <div className="form-left">
                        <h2 style={{ marginBottom: '10%' }}>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                            {status && <p>{status}</p>}
                        </form>
                    </div>
                    <div className="form-right">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>
                                    <a href="mailto:shivakumarhm9353@gmail.com" target="_blank" rel="noopener noreferrer">
                                        Email
                                    </a>
                                </span>
                            </li>
                            <li>
                                <i className="fab fa-linkedin"></i>
                                <span>
                                    <a href="https://www.linkedin.com/in/shivakumar-h-m-107288212/" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </span>
                            </li>
                            <li>
                                <i className="fab fa-github"></i>
                                <span>
                                    <a href="https://github.com/Shiva-from-Hanchihalli" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </span>
                            </li>
                            <li>
                                <i className="fas fa-globe"></i>
                                <span>
                                    <a href="https://shivanewweb.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        Portfolio
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default Contact;
