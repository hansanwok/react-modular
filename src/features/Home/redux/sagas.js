import {all, fork, put, takeEvery, call} from 'redux-saga/effects'
import API from 'services/api'

import {GET_LIST_STYLE} from './types'
import {getListStyleSuccess, getListStyleFail} from './actions'

function* handleGetListStyle() {
  try {
    const data = yield call(API.get('some url'))
    yield put(getListStyleSuccess())
  } catch (error) {
    yield put(getListStyleFail())
  }
}

function* watchGetListStyle() {
  yield takeEvery(GET_LIST_STYLE, handleGetListStyle)
}

export default function* homeSaga() {
  yield all([
    fork(watchGetListStyle),
  ])
}
