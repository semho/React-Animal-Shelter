import { createAction, createReducer, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { store } from "../../App";
import { ThunkDispatch } from "@reduxjs/toolkit";

export type RootState = {
  commentText: string,
  token: string,
  me: MeState,
}
// export type AppDispatch = typeof store.dispatch;
// export type AppDispatch = ThunkAction<void, RootState, unknown, Action<string>>;
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


// export const updateComment =
//   createAction('UPDATE_COMMENT');
// export const setToken =
//   createAction('SET_TOKEN');
// export const meRequest =
//   createAction('ME_REQUEST');
// export const meRequestSuccessAction =
//   createAction('ME_REQUEST_SUCCESS');
// export const meRequestErrorAction =
//   createAction('ME_REQUEST_ERROR');

// const initialState = {
//     commentText: 'Привет, SkillBox!',
//     token: '',
    // me: {
    //   loading: false,
    //   error: '',
    //   data: {},
    //   fetchingState: 'none',
    // },
  // }

// const productReleases = createSlice({
//   name: 'productReleases',
//   initialState,
//   reducers: {
//     updateComment: (state, action) => {
//       state.commentText = action.payload.text
//     },
//     setToken: (state, action) => {
//       state.token = action.payload.token
//     },

//   }
// })

// const { actions, reducer } = productReleases;

// export const {
//   updateComment, setToken,
// } = actions;
