import { FETCH_WEATHER } from '../actions/index';

export default function( state = [], acction) {
    switch (acction.type) {
     case FETCH_WEATHER:
     return [ acction.payload.data, ...state];
    }

    return state;
}