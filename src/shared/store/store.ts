import { Action, ActionCreator, Reducer } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { IAnimal } from '../../utils/requests/loadToday';

export type RootState = {
  animals: IAnimal[];
};

export type AppDispatch = ThunkDispatch<RootState, any, Action<string>>;

const initialState: RootState = { animals: [] };

const ADD_ANIMAL = 'ADD_ANIMAL';
type AddAnimalAction = {
  type: typeof ADD_ANIMAL;
  animals: IAnimal[];
};

export const addAnimal: ActionCreator<AddAnimalAction> = (
  animals: IAnimal[],
) => ({
  type: ADD_ANIMAL,
  animals,
});

type MyAction = AddAnimalAction;

export const rootReducer: Reducer<RootState, MyAction> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ADD_ANIMAL:
      return {
        ...state,
        animals: action.animals,
      };
    default:
      return state;
  }
};
