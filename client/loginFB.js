// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);

  // localStorage.setItem('token', response.authResponse.accessToken)
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    //document.getElementById('loginfbbtn').style.display = 'none'
    //document.getElementById('logoutbtn').style.display = 'block'

    testAPI();
  } else {
    // The person is not logged into your app or we are unable to tell.
    // document.getElementById('status').innerHTML = 'Please log ' +
    //   'into this app.';

    //document.getElementById('loginfbbtn').style.display = 'block'
    //document.getElementById('logoutbtn').style.display = 'none'
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '195182794582610',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  FB.api('/me', {fields: ['name', 'email', 'picture']}, function(response) {
    console.log(response.name);
    localStorage.setItem('photo', response.picture.data.url)
    localStorage.setItem('name', response.name)
    axios({
      method: 'post',
      url: 'http://localhost:3000/login',
      data: {
        email: response.email,
        name: response.name
      }
    })
    .then((res)=>{
      localStorage.setItem('token', res.data.token);
      if(res.data.status === 'login'){
        // email-nya udah, cuma lempar token
        alert(res.data.message)
      } else if(res.data.status === 'register'){
        // email-nya enggak ada, register trus lempar token
        alert(res.data.message)
      }
      window.location.replace('./index.html')
    })
    .catch((err)=>{
      console.log('ini error------->',err);
    });
  });
}

function logout() {

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      FB.logout(function(response) {
        console.log('logout', response);
        localStorage.clear()
        location.reload()
      });
    }
  })
}

function register(name, email, password) {
  // let name = document.getElementById('name').value
  // let email = document.getElementById('email').value
  // let password = document.getElementById('password').value

  console.log([name, email, password]);

  axios({
    method: 'post',
    url: 'http://localhost:3000/users/register',
    data: {
      name: name,
      email: email,
      password: password
    }
  })
  .then((res)=>{
    console.log(res);
    localStorage.setItem('token', res.data.token);
    if(res.data.already_registered === 'true'){
      console.log('udah ada akunnya');
      // email-nya udah, cuma lempar token
      alert(res.data.message)
    } else if(res.data.already_registered === 'false'){
      console.log('blom ada, regis berhasil');
      // email-nya enggak ada, register trus lempar token
      alert(res.data.message)
    }
  })
  .catch((err)=>{
    console.log('ini error------->',err);
  });
}

function login (email, password) {
  axios({
    method: 'post',
    url: 'http://localhost:3000/users/signin',
    data: {
      email: email,
      password: password
    }
  })
  .then((res)=>{
    console.log(res);
    localStorage.setItem('token', res.data.token);
    if(res.data.status === 'success'){
      console.log('udah ada akunnya');
      // email-nya udah, cuma lempar token
      alert(res.data.message)
    } else if(res.data.status === 'fail'){
      console.log('blom ada, regis berhasil');
      // email-nya enggak ada, register trus lempar token
      alert(res.data.message)
    }
    window.location.replace('./index.html')
  })
  .catch((err)=>{
    console.log('ini error------->',err);
  });
}
