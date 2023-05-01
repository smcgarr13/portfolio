import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors,setErrors] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleBlur = (e) => {
    const { name } = e.target;
    const validationErrors = { ...errors };

    if (!formData[name]) {
       validationErrors[name] = `${name} is required`;
    } else {
        delete validationErrors[name];
    }

    setErrors(validationErrors);
};

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!formData.name) {
            validationErrors.name = 'name is required';
        }
        if (!formData.email) {
            validationErrors.email = 'email is required';
        } else if (!validateEmail(formData.email)) {
            validationErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message) {
            validationErrors.message = 'message is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
            console.log('Form submitted successfully')
        }
};

return (
    <form onSubmit={ handleSubmit }>
        <div>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id='name'
                name='name'
                value={ formData.name }
                onChange={ handleChange }
                onBlur={ handleBlur }
            />
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                onBlur={ handleBlur }
            />
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
            <label htmlFor='message'>Message:</label>
            <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            onBlur={ handleBlur }
            />
            {errors.message && <span>{errors.message}</span>}
        </div>
        <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;