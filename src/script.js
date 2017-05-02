let me = 'I am here!';

let [a,b] = [1,2,3];

class People {
  constructor(name) {
    this.name = name;
  }
  intruduce(){
    console.log(`Hello ,My name is ${this.name}`)
  }
}

var p = new People('panda');
p.intruduce();
console.log(a);
