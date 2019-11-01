class ChatUser{
  constructor({ name, lastName, _id, perfilImg, chat }){
    this.fullName = `${name} ${lastName}`;
    this._id = _id;
    this.perfilImg = perfilImg;
    this.url = `/perfil/${_id}`;
    this.chat = chat || [];
  }
};

module.exports = ChatUser;
