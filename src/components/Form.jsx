import { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        };
    };

    const handleMouseEvent = (e) => {
        if (!email || !name || !message ) {
            setErrorMessage('All fields are required.');
            return;
        } else if (!validateEmail(email)) {
            setErrorMessage('A valid email is required.')
            return;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email || !name || !message ) {
            setErrorMessage('All fields are required.');
            return;
        } else if (!validateEmail(email)) {
            setErrorMessage('A valid email is required.')
            return;
        }
        alert(`Coming soon ${name}!`);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form method="post" action="#" onSubmit={handleFormSubmit} onMouseLeave={handleMouseEvent}>
            <div className="row">
                {errorMessage && ( <div className="col-12 error"><p>{errorMessage}</p></div>)}
                <div className="col-6 col-12-mobile"><input value={name} onChange={handleInputChange} type="text" name="name" placeholder="Name" /></div>
                <div className="col-6 col-12-mobile"><input value={email} onChange={handleInputChange} type="text" name="email" placeholder="Email" /></div>
                <div className="col-12">
                    <textarea value={message} onChange={handleInputChange} name="message" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                    <input type="submit" value="Send Message" />
                </div>
            </div>
        </form>
    );
}