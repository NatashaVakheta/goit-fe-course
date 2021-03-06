const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  // код
  if (login.length >= 4 && login.length <= 16) {
      return true;
  }
  console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  return false;
};

const isLoginUnique = function(allLogins, login) {
  // код
  for (i = 0; i < allLogins.length; i++) {
      if (allLogins[i] == login) {
          console.log('Такой логин уже используется!');
          return false;
      }
  }
  return true;
};

const addLogin = function(login) {
    // код
    if (isLoginValid(login) == true && isLoginUnique(logins, login) == true) {
        logins.push(login);
        console.log('Логин успешно добавлен!');
    }
};

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

