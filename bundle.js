"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToDoList =
/*#__PURE__*/
function () {
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    this.todos = [];
  }

  _createClass(ToDoList, null, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo Todo');
      console.log(this.todos);
    }
  }]);

  return ToDoList;
}();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "Soma",
    value: function Soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.Soma(5, 3));
