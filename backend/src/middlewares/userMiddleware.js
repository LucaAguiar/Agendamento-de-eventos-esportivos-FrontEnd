const validateUser = (req, res, next) => {
    const {body} = req;

    if (body.user == undefined || body.user == ''){
        return res.status(400).json({ message: "O campo 'user' é obrigatório" });
    }

    if (body.password == undefined || body.password == ''){
        return res.status(400).json({ message: "O campo 'password' é obrigatório" });
    }

    next();
};

module.exports = {
    validateUser
};