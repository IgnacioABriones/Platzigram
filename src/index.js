var page = require('page');
var yo = require('yo-yo');

var main = document.getElementById('main-container')

page('/', function(ctx, next){
  main.innerHTML='<a href="/signup">Signup</a>'
})


page('/signup', function(ctx, next){
  var main = document.getElementById('main-container');
  var el = yo`<div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
              <div class="col m5 hide-on-small-only">
              <img class="iphone" src="iphone.png">
              </div>
                <div class="col s12 m7">
                <div class="row">
                  <div class="signup-box">
                    <h1 class="platzigram">Platzigram</h1>
                      <form class="signup-form" action="index.html" method="post">
                        <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                        <div class="section">
                          <a class="btn btn-fb hiden-on-smal-only">Iniciar Sesion con Facebook</a>
                          <a class="btn btn-fb hide-on-med-and-up">Iniciar Sesion</a>
                        </div>
                        <div class="divider"></div>
                        <div class="section">
                          <input type="email" name="email" placeholder="correo electronico"/>
                          <input type="text" name="name" placeholder="Nombre completo"/>
                          <input type="text" name="username" placeholder="Nombre de Usuario"/>
                          <input type="password" name="password" placeholder="Contraseña"/>
                          <button class="btn waves-effect waves-light btn-signup"type="submit" name="button">Registrar</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="row">
                    <div class="login-box">
                       ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                    </div>

                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>`

    main.appendChild(el);
})

page('/signin', function(ctx, next){
  main.innerHTML = 'signin'; // diga signup
})


page();
