const arr = [
  {
    items:[0, 1, 2]
  },
  {
    items:['a', 'b', 'c']
  },
  {
    items:['x', 'y', 'z']
  },
];

const getOrder = () => {
  return arr.map(foo => foo.items.map(item => console.log(`<h1>${item}</h1>`)));
};

getOrder();
