function check(login, password) {
    if (login == 'John' && password == '123')
        return true;
    else
        return false;
}

export const SignInService = {'check':check};
