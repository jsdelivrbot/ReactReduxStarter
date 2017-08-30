import { CHANGE_AUTH } from '../actions/types.js';

export default function (state = { authenticated: false }, action) {
    switch (action.type) {
        case CHANGE_AUTH:
            return { ...state, authenticated: action.payload };
        default:
            return state;
    }
}