import { BehaviorSubject } from 'rxjs';

// CLF CHANGED - import config from 'config';
import { handleResponse } from '../_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    // CLF - we put API_ENDPOINT url in public/config.js and stored it in localstorage
    const apiUrl = JSON.parse(localStorage.getItem('config')).API_ENDPOINT;

    return fetch(`${apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);

        return user;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
