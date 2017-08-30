import * as ActionTypes from './types';

import history from '../services/history';

export function authenticate(isLoggedIn) {

    if (isLoggedIn) {
        history.push('/protected');
        localStorage.setItem('auth_token', 'place_jwt_token_here')
    }
    else {
        history.push('/');
        localStorage.removeItem('auth_token');
    }

    return {
        type: ActionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }
}
