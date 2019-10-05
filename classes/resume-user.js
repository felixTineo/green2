class ResumeUser{
  constructor({ name, lastName, mail, _id, perfilImg, status, wallet }){
    this.fullName = `${name} ${lastName}`;
    this.name = name;
    this.lastName = lastName;
    this.mail = mail;
    this._id = _id;
    this.perfilImg = perfilImg;
    this.url = `/user/perfil/${_id}`;
    this.status = status;
    this.wallet = wallet;
  }
};

module.exports = ResumeUser;
