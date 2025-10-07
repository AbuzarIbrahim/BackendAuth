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

const validateTaskCreate = (req, res, next) => {
    const { title, description, deadline, status } = req.body;
    const errors = {};

    if (!title || String(title).trim().length === 0) {
        errors.title = 'Task title is required';
    }

    if (!description || String(description).trim().length === 0) {
        errors.description = 'Task description is required';
    }

    if (!deadline) {
        errors.deadline = 'Task deadline is required';
    } else {
        const d = new Date(deadline);
        if (isNaN(d.getTime())) {
            errors.deadline = 'Deadline must be a valid date';
        }
    }

    if (status !== undefined) {
        const allowed = ['Completed', 'Incomplete'];
        if (!allowed.includes(status)) {
            errors.status = "Status must be either 'Completed' or 'Incomplete'";
        }
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            status: 'fail',
            message: 'Validation error',
            errors
        });
    }

    next();
};

const validateTaskUpdate = (req, res, next) => {
    const { title, description, deadline, status } = req.body;
    const errors = {};

    if (title !== undefined && String(title).trim().length === 0) {
        errors.title = 'Task title cannot be empty';
    }

    if (description !== undefined && String(description).trim().length === 0) {
        errors.description = 'Task description cannot be empty';
    }

    if (deadline !== undefined) {
        const d = new Date(deadline);
        if (isNaN(d.getTime())) {
            errors.deadline = 'Deadline must be a valid date';
        }
    }

    if (status !== undefined) {
        const allowed = ['Completed', 'Incomplete'];
        if (!allowed.includes(status)) {
            errors.status = "Status must be either 'Completed' or 'Incomplete'";
        }
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            status: 'fail',
            message: 'Validation error',
            errors
        });
    }

    next();
};

module.exports = {
    validateSignup,
    validateLogin,
    validateTaskCreate,
    validateTaskUpdate,
};
