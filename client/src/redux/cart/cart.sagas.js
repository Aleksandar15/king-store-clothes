import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSIgnOut(){
  yield put(clearCart())
}

export function* onSignoutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,
    clearCartOnSIgnOut)
}

export function* cartSagas(){
  yield(all([call(onSignoutSuccess)]))
}