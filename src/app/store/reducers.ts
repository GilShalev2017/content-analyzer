//content.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addResult } from './actions';
import { Result } from '../../models/models';

export const initialState: any[] = [];

export const contentReducer = createReducer(
  initialState,
  on(addResult, (state, { result }) => [...state, result])
);