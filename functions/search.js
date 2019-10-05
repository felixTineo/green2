const client = require('../midlewares/client');

const search = async (name, tosearch) => {
  if(!name) return;
  const search = await client.lrangeAsync(tosearch , 0, -1);
  const parsedItems = await search.map(item => JSON.parse(item));
  name.toLocaleLowerCase();
  const suggest = await parsedItems.filter(item => item.fullName.toLocaleLowerCase().indexOf(name) > -1);
  return new Promise((resolve, reject) => {
    if (suggest.length > 0){
      resolve(suggest);
    } else {
      reject([]);
    }
  });
};

module.exports = search;
