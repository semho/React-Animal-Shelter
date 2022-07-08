import { Action, ActionCreator, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { ThunkDispatch } from "@reduxjs/toolkit";

export type RootState = {
  commentText: string,
  token: string,
  me: MeState,
}

export type AppDispatch = ThunkDispatch<RootState, any, Action<string>>;

const initialState: RootState = {
  commentText: 'Привет, SkillBox!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
    fetchingState: 'none',
  },
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}

const TOKEN = 'SET_TOKEN';
type SetTokenAction = {
  type: typeof TOKEN;
  token: string;
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: TOKEN,
  token,
})

type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestErrorAction
  | MeRequestSuccessAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }

}
