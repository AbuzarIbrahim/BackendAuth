/**
 * Validates user signup input
 */
const validateSignup = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = {};

    // Validate name
    if (!name) {
        errors.name = 'Name is required';
    } else if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    }

    // Validate email
    if (!email) {
        errors.email = 'Email is required';
    } else {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Please provide a valid email';
        }
    }

    // Validate password
    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    // Return errors if any
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            status: 'fail',
            message: 'Validation error', 
            errors
        });
    }

    next();
};

/**
 * Validates user login input
 */
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    const errors = {};

    // Validate email
    if (!email) {
        errors.email = 'Email is required';
    }

    // Validate password
    if (!password) {
        errors.password = 'Password is required';
    }

    // Return errors if any
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            status: 'fail',
            message: 'Please provide email and password',
            errors
        });
    }

    next();
};

module.exports = {
    validateSignup,
    validateLogin
};
