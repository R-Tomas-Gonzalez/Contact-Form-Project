export default function validateInfo(values) {
    let errors = {};

    if (!values.firstName.trim()) {
        errors.firstName = "First name required"
    }

    if (!values.lastName.trim()) {
        errors.lastName = "Last name required"
    }

    if (!values.email) {
        errors.email = "Email required"
    } else if (! /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "Please enter a valid email"
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = "Phone number required"
    } else if (! /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(values.phoneNumber)) {
        errors.phoneNumber = "Phone number is invalid. Please use the ###-###-#### format"
    }

    return errors;
}