//content.actions.ts
import { createAction, props } from '@ngrx/store';
import { Result } from '../../models/models';

export const addResult = createAction('[Content] Add Result', props<{ result: Result }>());
