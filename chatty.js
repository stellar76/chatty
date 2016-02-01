Chats = new Mongo.Collection('chats');
if (Meteor.isClient) {
  Template.body.helpers({
    chats: function(){
      return Chats.find();
    }
  })
}
//
Template.body.events({
  'submit .new-chat' : function(event){
    var time = '';
    var name = '';
    var message = ''
    //
    Chats.insert({
      time: time,
      name: name,
      message: message
    });
    return false;
  }
})
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
