/* eslint-disable consistent-return */
import axios from '../../configs/api/server';
import { AppDispatch, ApiAction, NextFn } from '../../configs/types/api';
import * as actions from '../api';

const api = ({ dispatch }: AppDispatch) => (next: NextFn) => async (
  action: ApiAction
) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  if (onStart) dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      url,
      method,
      data,
    });
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
