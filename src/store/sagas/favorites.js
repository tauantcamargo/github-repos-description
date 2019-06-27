import { call, put } from 'redux-saga/effects';

import { Creators as FavoriteActions } from '../ducks/favorites';
import api from '../../services/api';

export function* addFavorite(action) {
 try {
  const { data } = yield call(api.get, `repos/${action.payload.repository}`);

  const repositoryData = {
    id: Math.random(),
    name: data.full_name,
    description: data.description,
    url: data.html_url,
  }

  yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
 } catch (err) {
  yield put(FavoriteActions.addFavoriteFailure("Error to add this repository! Try againg later :D"));
 }
}
