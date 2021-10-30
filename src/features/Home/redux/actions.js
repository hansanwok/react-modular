import {GET_LIST_STYLE, GET_LIST_STYLE_SUCCESS, GET_LIST_STYLE_FAIL} from './types'

export const getListStyle = () => ({
  type: GET_LIST_STYLE
})

export const getListStyleSuccess = () => ({
  type: GET_LIST_STYLE_SUCCESS
})

export const getListStyleFail = () => ({
  type: GET_LIST_STYLE_FAIL
})
