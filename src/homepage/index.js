var page  = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');



page('/', function(ctx, next){
	title('platzigram');
  var main = document.getElementById('main-container');
  
  var pictures = [
  	{
  		user: { 
  			username: 'ibriones',
  			avatar: 'https://scontent.fscl14-1.fna.fbcdn.net/v/t1.0-1/p240x240/18425566_10213226037144284_911498844009859581_n.jpg?oh=b4571579ecf203c5289a53d6aab3c8ea&oe=59FF9237'
  		},
  		url: 'office.jpg',
  		likes: 10,
  		liked: false,
  		createdAt: new Date()
  	},
  	{ 
  		user: { 
  			username: 'ibriones',
  			avatar: 'https://scontent.fscl14-1.fna.fbcdn.net/v/t1.0-1/p240x240/18425566_10213226037144284_911498844009859581_n.jpg?oh=b4571579ecf203c5289a53d6aab3c8ea&oe=59FF9237'
  		},
  		url: 'office.jpg',
  		likes: 2,
  		liked: true,
  		createdAt: new Date().setDate(new Date().getDate()-10)
  	}
  ];


  empty(main).appendChild(template(pictures));
})
