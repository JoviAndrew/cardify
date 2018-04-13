
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else {

    if (window.location.href != 'http://localhost:8080/index.html') {
      window.location.href="index.html"
    }
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '195182794582610',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
  FB.api('/me', {fields: ['name','email']}, function(response) {
    localStorage.setItem('name', response.name)
    let obj ={
      email: response.email,
      idFB: response.id,
      name: response.name
    }
    axios.post('http://localhost:3000/login', {
      obj
    },{})
    .then((res)=>{
      localStorage.setItem('token', res.data.token);
    })
    .catch((err)=>{
      console.log('ini error------->',err);
    });
  });
}
//
// function logout() {
//
//   FB.getLoginStatus(function(response) {
//     if (response.status === 'connected') {
//       FB.logout(function(response) {
//         console.log('logout', response);
//         localStorage.clear()
//         location.reload()
//       });
//     }
//   })
// }
