import * as ActionTypes from './types';

import history from '../services/history';

export function authenticate(isLoggedIn) {

    if (isLoggedIn) {
        history.push('/protected');
    }
    else {
        history.push('/');
    }

    return {
        type: ActionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }
}
