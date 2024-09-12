import React, { useState } from "react";

function Form() {

    const [touched, setTouched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);




        if (event.target.validity.typeMismatch) {
            setErrorMessage('Oops! Please check your email');




        } else {
            setErrorMessage('');

        }
    };

    const handleInputFocus = () => {
        setTouched(true);
    };





    return (
        <React.Fragment>
            <div class='email-div'>
                <form noValidate >
                    <input type='email' id='email' name='user-email' value={email} placeholder="Email address" required onFocus={handleInputFocus} onChange={handleInputChange} className={errorMessage ? 'error' : ""}></input>

                    <button type="submit">Request Access</button>
                </form>
                {errorMessage && (
                    <span style={{ color: 'red' }}>{errorMessage}</span>  // Render error message
                )}

            </div>
        </React.Fragment>
    )
}

export default Form;