const uuid = require('uuid/v1');
const rdn = (num) => Math.floor((Math.random() * num) + 1);

const createPosts = (num) => {
  let i = 0;
  const posts = [];
  while(i < num){
    const author = {
      _id: uuid(),
      name: `User-${rdn(7)}`,
      lastName: 'Green',
      perfilImg: `/static/persons/person-${rdn(7)}.jpg`,
      url: `/perfil/${uuid()}`,
    }
    const post = {
      author,
      date: Date.now(),
      img: `/static/random/r${rdn(16)}.jpg`,
      title: `post-${rdn(16)}`,
      subTitle: `sub-posts-${rdn(16)}`,
      history: `post-${rdn(16)}`,
      comments: [],
      likes: Array(rdn(30)).fill(0),
    }
    posts.unshift(post)
    i++;
  }
  return posts;
}

const posts = createPosts(16);
const greenposts = createPosts(10);
console.log(posts);
module.exports = {
  posts,
  greenposts,
};
