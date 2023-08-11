const propName = 'dinamycally property name';

/* /* const obj1 = {
  propName: 123,
};

const obj2 = {
  [propName]: 123,
};

console.log(obj1);
console.log(obj2); */

const objPropAsKey = {
  a: 1,
  b: 2,
};

const obj = {
  [objPropAsKey.a]: objPropAsKey.a,
};
console.log(obj);

function createObj(prop) {
  return {
    [prop]: prop,
  };
}

console.log(createObj(objPropAsKey.a));
