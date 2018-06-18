let eMail = prompt('введите логин');
if (eMail) {
    if (eMail === 'ADMIN_LOGIN') {
        let password = prompt('введите пароль');
        if (password) {
            if (password === 'ADMIN_PASSWORD') {
                alert('Добро пожаловать!');
            } else {
                alert('Доступ запрещен!');        
            }
        } else {
            alert('Отменено пользователем!');
        }
    } else {
        alert('Доступ запрещен!');   
    }
} else {
    alert('Отменено пользователем!');
}