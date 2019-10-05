class Notifications{
  constructor({ notes, friends, gifts, _id, wallet }){
    this.id = _id;
    this.wallet= wallet;
    this.notes = {
      view: false,
      items: notes,
    };
    this.friendReq = {
      view: false,
      items: friends.filter(friend => friend.status === 1),
    };
    this.gifts = {
      view: false,
      items: gifts,
    };
  }
}

module.exports =  Notifications;
