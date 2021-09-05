import {useState, useEffect} from 'react';

const useForm = (validateInfo, props) => {
    const lastUser = props.userData.length - 1;
    const lastUserId = props.userData[lastUser].id;
    
    const [values, setValues] = useState({
        id: (lastUserId + 1),
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    })
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        
        setValues ({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setSubmitted(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitted) {
            props.handleNewData(values);
            props.history.push("/");
        }
    }, [errors, props, submitted, values]);


    return {handleChange, handleSubmit, values, errors}
}

export default useForm;