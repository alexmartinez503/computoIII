var express = require('express');
var router = express.Router();
const users = require("../usersData");
const methods = require("../methods");

const registerPage = "../views/users/register";
const loginPage = "../views/users/login";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res){
  res.render('home');
});
router.get('/login', (req, res) => {
  res.render(loginPage);
});
router.get('/register', (req, res) =>{
  res.render(registerPage);
});

router.post('/register', (req, res)=> {
  const { fullname, email, password, ConfirmPassword }= req.body;

  if ( password === ConfirmPassword) {
      
    if (users.data.find(u => u.email === email)){
      res.render(registerPage, {
        message: "El usuario ya esta registrado",
        messageClass: "alert-danger"
    });
     }
     const phash = methods.getHashesPassword(password);

     users.data.push( {
       fullname,
       email,
       password: phash
     });
     res.render(loginPage, {
      message: "Registro Completo. Inicie Sesion",
      messageClass: "alert-success"
    });
  }else {
    res.render(registerPage, {
      message: "Las contraseñas no coinciden",
      messageClass: "alert-danger"
    });
  }
})
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = methods.getHashesPassword(password);

  const dataUser = users.data.find(u => {
    return u.email === email && hashedPassword === u.password
  });

  if (dataUser) {
    const authTokens = methods.generateToken();

    methods.authTokens[authTokens] = dataUser;
    res.cookie('AuthToken', authTokens);
    res.redirect('/home');
  } else {
    res.render(loginPage, {
      message: "EL usuario o clave no coincide",
      messageClass: "alert-danger"
    });
  }
});
module.exports = router;
