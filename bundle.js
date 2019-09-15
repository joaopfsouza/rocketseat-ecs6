"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Desafio 1
console.log("========= Desafio 1 =========");

var User =
/*#__PURE__*/
function () {
  function User(email, senha) {
    _classCallCheck(this, User);

    this.email = email, this.senha = senha;
    this.admin = false;
  }

  _createClass(User, [{
    key: "IsAdmin",
    value: function IsAdmin() {
      return this.admin;
    }
  }]);

  return User;
}();

var Admin =
/*#__PURE__*/
function (_User) {
  _inherits(Admin, _User);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var user1 = new User("joao@hotmail.com", 1234);
console.log(user1);
console.log(user1.IsAdmin());
var admin1 = new Admin("joao@hotmail.com", 1234);
console.log(admin1);
console.log(admin1.IsAdmin()); // Desafio 2

console.log("========= Desafio 2 =========");
var users = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = users.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(idades);
var rocket = users.filter(function (_ref2) {
  var empresa = _ref2.empresa,
      idade = _ref2.idade;
  return empresa === 'Rocketseat' && idade >= 18;
});
console.log(rocket);
var google = users.find(function (_ref3) {
  var empresa = _ref3.empresa;
  return empresa === 'Google';
});
console.log(google);
var multIdade = users.map(function (user) {
  user.idade *= 2;
  return user;
}).filter(function (_ref4) {
  var idade = _ref4.idade;
  return idade <= 50;
});
console.log(multIdade); // Desafio 3

console.log("========= Desafio 3 =========");
var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
}));
var user = {
  name: 'Joao',
  age: 29
};

var mostrarIdade = function mostrarIdade(usr) {
  return usr.age;
};

console.log(mostrarIdade(user));
var name = 'Joao';
var age = 29;

var ShowUser = function ShowUser() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Pedro';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '34';
  return {
    nome: nome,
    idade: idade
  };
};

console.log(ShowUser('Joao'));
console.log(ShowUser());

var promise = function promise() {
  return new Promise(function (resolve) {
    return resolve("Deu certo");
  });
};

promise().then(function (response) {
  return console.log(response);
}); // Desafio 4

console.log("========= Desafio 4 =========");
var user4 = {
  nome: 'Vaca',
  idade: 23,
  empresa: 'Rocketseat'
};

var mostraInfo = function mostraInfo(_ref5) {
  var nome = _ref5.nome,
      idade = _ref5.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraInfo(user4)); // Desafio 5

console.log("========= Desafio 5 =========");
var arr2 = [1, 2, 3, 4, 5, 6];
var x = arr2[0],
    y = arr2.slice(1);
console.log(x, y);

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2));
var usuarioSpread = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var userSpread1 = _objectSpread({}, usuarioSpread, {
  nome: "Gabriel"
});

var userSpread2 = _objectSpread({}, usuarioSpread, {
  endereco: _objectSpread({}, usuarioSpread.endereco, {
    cidade: 'Lontras'
  })
});

console.log(userSpread1);
console.log(userSpread2); // Desafio 6

console.log("========= Desafio 6 =========");
var usuario = 'Diego';
var idade = 23;
console.log("O usu\xE1rio ".concat(usuario, " tem ").concat(idade, " anos.")); // Desafio 7

console.log("========= Desafio 7 =========");
var nome7 = 'Diego';
var idade7 = 23;
var cidade7 = 'ValCamp';
var usuario7 = {
  nome7: nome7,
  idade7: idade7,
  cidade7: cidade7
};
console.log(usuario7);
