import { createAction } from '@reduxjs/toolkit';

import { CreateAction } from '../configs/types/api';

export const apiCallBegan = createAction<CreateAction>('api/callBegan');
export const apiCallSuccess = createAction<CreateAction>('api/callSuccess');
export const apiCallFailed = createAction<CreateAction>('api/callFailed');
