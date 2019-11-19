const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
});
router.get("/contato", (req, res) => {
    res.render("contato");
});
router.get("/sobre", (req, res) => {
    res.render("sobre");
});
router.get("/login", (req, res) => {
    console.log(req.body);
    res.render("login");
});
router.get("/register", (req, res) => {
    console.log(req.body);
    res.render("register");
});
router.post("/createUser", (req, res) => {
    const createUser = require("./controllers/AccountController");
    console.log("ok")
    const statusCriacao = createUser(
        req.body.emailUser,
        req.body.passUser,
        req.body.userAge,
        req.body.userName
    )
    if (statusCriacao == "Sucesso") {
        res.redirect('/')
        console.log("")
    } else if (statusCriacao == "Falha") {
        console.log("Erro!")
    } else {
        console.log("Erro desconhecido!")
    }
});
module.exports = router;