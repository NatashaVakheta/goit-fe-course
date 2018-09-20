function runRequest(url, method, params) {
    let paramsJSON = null;
    if (method === 'POST' || method === 'PUT') {
      paramsJSON = JSON.stringify(params)
    }
    const prom = fetch(url, {
      method: method,
      body: paramsJSON,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return prom;
  }
  
  function badResponse(result) {
    alert('Something wrong with request!');
    console.log('bad', result);
  }
  
  function getAllUsers() {
    runRequest('https://test-users-api.herokuapp.com/users/', 'GET', {}).then(
      function(result) {
        result.json().then(data => {
            document.getElementById('result').value = JSON.stringify(data.data);
        });
      },
      function(result) {
        badResponse(result);
      }
    );
  }
  
  function getUserById(id) {
    runRequest('https://test-users-api.herokuapp.com/users/'+id, 'GET', {}).then(
      function(result) {
        result.json().then(data => {
            document.getElementById('result').value = JSON.stringify(data.data);
        });
      },
      function(result) {
        badResponse(result);
      }
    );
  }
  
  function addUser(username, userage) {
    const data = {name: username, age: userage};
    runRequest('https://test-users-api.herokuapp.com/users/', 'POST', data).then(
      function(result) {
        result.json().then(data => {
            document.getElementById('result').value = JSON.stringify(data.data);
            document.getElementById('removeUserID').value = data.data._id;
            document.getElementById('updateUserID').value = data.data._id;
        });
      },
      function(result) {
        badResponse(result);
      }
    );
  }
  
  function removeUser(id) {
    runRequest('https://test-users-api.herokuapp.com/users/'+id, 'DELETE', {}).then(
      function(result) {
        result.json().then(data => {
            document.getElementById('result').value = JSON.stringify(data.data);
            document.getElementById('removeUserID').value = '';
            document.getElementById('updateUserID').value = '';
        });
      },
      function(result) {
        badResponse(result);
      }
    );
  }
  
  function updateUser(id, user) {
    console.log(user);
    runRequest('https://test-users-api.herokuapp.com/users/'+id, 'PUT', user).then(
      function(result) {
        result.json().then(data => {
            document.getElementById('result').value = JSON.stringify(data.data);
        });
      },
      function(result) {
        badResponse(result);
      }
    );
  }
  