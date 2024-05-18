// redux/actions/userActions.ts

import { ADD_USER, DELETE_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS, UPDATE_USER } from "../constants";

export const fetchUsersSuccess = (users: any[]) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const addUser = (user: any) => ({
  type: ADD_USER,
  payload: user,
});

export const deleteUser = (userId: number) => ({
  type: DELETE_USER,
  payload: userId,
});

export const updateUser = (user: any) => ({
  type: UPDATE_USER,
  payload: user,
});
