import { Reducer } from "react";
import { IUserData, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./actions";

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
  fetchingState: string;
}

type MeActions = MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction;

export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
        fetchingState: 'requesting',
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        fetchingState: 'error',
      }
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        fetchingState: 'success',
      }
    default:
      return state;
  }
}
