'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var me = 'I am here!';

var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[1];

var People = function () {
  function People(name) {
    _classCallCheck(this, People);

    this.name = name;
  }

  _createClass(People, [{
    key: 'intruduce',
    value: function intruduce() {
      console.log('Hello ,My name is ' + this.name);
    }
  }]);

  return People;
}();

var p = new People('panda');
p.intruduce();
console.log(a);
