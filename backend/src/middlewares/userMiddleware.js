const validateUser = (req, res, next) => {
    const {body} = req;

    if (body.nome == undefined || body.nome == ''){
        return res.status(400).json({ message: "O campo 'nome' é obrigatório" });
    }

    if (body.email == undefined || body.email == ''){
        return res.status(400).json({ message: "O campo 'email' é obrigatório" });
    }

    if (body.senha == undefined || body.senha == ''){
        return res.status(400).json({ message: "O campo 'senha' é obrigatório" });
    }

    if (body.dataNascimento == undefined || body.dataNascimento == ''){
        return res.status(400).json({ message: "O campo 'dataNascimento' é obrigatório" });
    }

    next();
};

module.exports = {
    validateUser
};