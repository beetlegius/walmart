import { CategoryActionTypes, CategoryActions } from './category.actions';
import { Category } from '../../models';

export interface CategoryState {
  currentCategoryId: number | null;
  categories: Category[];
  error: string;
}

const initialState: CategoryState = {
  currentCategoryId: null,
  categories: [],
  error: ''
}

export function reducer(state = initialState, action: CategoryActions): CategoryState {

  switch (action.type) {
  case CategoryActionTypes.LoadSuccess:
    return {
      ...state,
      categories: action.payload,
      error: ''
    }
  case CategoryActionTypes.LoadFail:
    return {
      ...state,
      categories: [],
      error: action.payload
    }
  case CategoryActionTypes.SelectCategory:
    return {
      ...state,
      currentCategoryId: +action.payload.id
    }
  default:
    return state;
  }
  
}