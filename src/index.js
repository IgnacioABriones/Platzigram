var page = require('page');

var main = document.getElementById('main-container')

page('/', function(ctx, next){
  main.innerHTML =  'Home <a href="/signup">Signup</a>';//diga home
})


page('/signup', function(ctx, next){
  main.innerHTML = 'Signup hola hola hhh <a href="/">Home</a>'; // diga signup
})

page('/signin', function(ctx, next){
  main.innerHTML = 'signin'; // diga signup
})


page();