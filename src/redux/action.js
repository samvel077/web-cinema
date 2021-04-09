import {
  SHOW_LOADING,
  HIDE_LOADING,
  GET_SHOW_LIST,
  ERROR_MESSAGE,
  STAR_COLOR_CHANGER,
  DELETE_SHOW,
  GENRES,
  DELETE_GENRE,
  GET_SHOW
} from "../redux/constantes";
import axios from "axios";

const apiURL = "http://api.tvmaze.com";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function showLoading() {
  return {
    type: SHOW_LOADING,
  };
}

export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}

export function getShowList(value) {
  return async (dispatch) => {
    try {
      if (value) {
        dispatch({ type: SHOW_LOADING });

        const response = await axios(`${apiURL}/search/shows?q=${value}`);

        dispatch({
          type: GET_SHOW_LIST,
          payload: response.data,
        });

        console.log(response.data);

        dispatch({ type: HIDE_LOADING });
      }
    } catch (error) {
      dispatch({
        type: ERROR_MESSAGE,
        payload: error.message,
      });
    }
  };
}

export function starColorChanger(showName, rating) {
  return async (dispatch) => {
    // dispatch({ type: SHOW_LOADING });

    // await wait(500);

    // dispatch({ type: HIDE_LOADING });

    dispatch({
      type: STAR_COLOR_CHANGER,
      payload: { showName: showName, rating: rating },
    });
  };
}

export function deleteShow(id) {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADING });

    await wait(500);

    dispatch({ type: HIDE_LOADING });

    dispatch({
      type: DELETE_SHOW,
      payload: id,
    });
  };
}

export function getGenres() {
  return {
    type: GENRES,
  };
}

export function deleteGenre(genre) {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADING });

    await wait(500);

    dispatch({ type: HIDE_LOADING });

    dispatch({
      type: DELETE_GENRE,
      payload: genre,
    });
  };
}


export function getShow(id) {
  return async (dispatch) => {
    console.log(id);
    try {
        const response2 = await axios(`${apiURL}/shows/${id.id}`);

        dispatch({
          type: GET_SHOW,
          payload: response2.data,
        });

        console.log(response2.data);
    } catch (error) {
      dispatch({
        type: ERROR_MESSAGE,
        payload: error.message,
      });
    }
  };
}