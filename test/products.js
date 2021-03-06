const uuid = require('uuid/v1');

const products = [
  {
    id: uuid(),
    name: '',
    price: 0,
    tag: '',
    img: '/static/store/products/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'pulsera de perlas',
    price: 100,
    tag: 'JEWEL',
    img: '/static/store/products/bis-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'pulsera reloj',
    price: 150,
    tag: 'JEWEL',
    img: '/static/store/products/bis-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'pulsera de perlas negras',
    price: 200,
    tag: 'JEWEL',
    img: '/static/store/products/bis-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'pulsera de plata con perlas',
    price: 250,
    tag: 'JEWEL',
    img: '/static/store/products/bis-4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'pulsera de oro y rubi',
    price: 300,
    tag: 'JEWEL',
    img: '/static/store/products/bis-5.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'pulsera de oro y rubis',
    price: 350,
    tag: 'JEWEL',
    img: '/static/store/products/bis-6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'pablo neruda, poemas',
    price: 20,
    tag: 'EBOOK',
    img: '/static/store/products/eb-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'once minutos',
    price: 25,
    tag: 'EBOOK',
    img: '/static/store/products/eb-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'la culpa es de la vaca',
    price: 15,
    tag: 'EBOOK',
    img: '/static/store/products/eb-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'adulterio',
    price: 25,
    tag: 'EBOOK',
    img: '/static/store/products/eb-4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: '100 años de soledad',
    price: 40,
    tag: 'EBOOK',
    img: '/static/store/products/eb-5.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'dracula',
    price: 30,
    tag: 'EBOOK',
    img: '/static/store/products/eb-6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'oreo',
    price: 5,
    tag: 'CANDY',
    img: '/static/store/products/gol-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'sabmba',
    price: 15,
    tag: 'CANDY',
    img: '/static/store/products/gol-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'suzy',
    price: 10,
    tag: 'CANDY',
    img: '/static/store/products/gol-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'cocosette',
    price: 10,
    tag: 'CANDY',
    img: '/static/store/products/gol-4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'caramelos duros',
    price: 5,
    tag: 'CANDY',
    img: '/static/store/products/gol-5.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'helado',
    price: 25,
    tag: 'CANDY',
    img: '/static/store/products/gol-6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'aoki',
    price: 50,
    tag: 'MUSIC',
    img: '/static/store/products/ms-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'marc anthony',
    price: 20,
    tag: 'MUSIC',
    img: '/static/store/products/ms-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'mana',
    price: 30,
    tag: 'MUSIC',
    img: '/static/store/products/ms-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'maluma',
    price: 1,
    tag: 'MUSIC',
    img: '/static/store/products/ms-4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'david guetta',
    price: 50,
    tag: 'MUSIC',
    img: '/static/store/products/ms-5.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'netflix',
    price: 30,
    tag: 'TV',
    img: '/static/store/products/tv-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'amazon GO',
    price: 30,
    tag: 'TV',
    img: '/static/store/products/tv-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'HBO',
    price: 30,
    tag: 'TV',
    img: '/static/store/products/tv-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'oso tedy',
    price: 30,
    tag: 'TOY',
    img: '/static/store/products/ty-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'cara de papa',
    price: 40,
    tag: 'TOY',
    img: '/static/store/products/ty-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'finger spinner',
    price: 30,
    tag: 'TOY',
    img: '/static/store/products/ty-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'oso hipster',
    price: 30,
    tag: 'TOY',
    img: '/static/store/products/ty-4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
  {
    id: uuid(),
    name: 'toy story 4',
    price: 30,
    tag: 'TOY',
    img: '/static/store/products/ty-5.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, recusandae saepe. Illum quod dolores tempore consequatur totam nihil omnis eum a numquam! Provident nihil, itaque nulla recusandae molestiae possimus placeat.',
    count: 100,
  },
]

module.exports = products;
