function validation(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Username should not be empty";
    }

    if (!values.email.trim()) {
        errors.email = "Email should not be empty";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty";
    } else if (values.password.length < 6) {
        errors.password = "Password should be at least 6 characters long";
    }

    return errors;
}

export default validation;

