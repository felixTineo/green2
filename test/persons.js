const uuid = require('uuid/v1');

const names = ['james', 'johm', 'jenna', 'patrice', 'thera', 'rowan', 'star'];
const lastNames = ['doe', 'doe', 'fire', 'wind', 'earth', 'fire', 'green'];

const persons = (num) => {
  const persons = [];
  for(let i = 0; i < num; i++){
    const _id = uuid();
    const person = {
      _id,
      mail: `foo${i + 1}@mail.com`,
      name: names[i],
      lastName: lastNames[i],
      fullName: `${names[i]} ${lastNames[i]}`,
      perfilImg: `/static/persons/person-${i + 1}.jpg`,
      status:0,
      url: `/perfil/${_id}`,
    }
    persons.push(person);
  }
  return persons;
};

module.exports = persons;
