import { useCallback, useReducer } from "react";

const ACTIONS = {
  CHANGE_KEYWORD: "change_keyword",
  CHANGE_RATING: "change_rating",
};

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
    ...state,
    times: state.times + 1,
    keyword: action.payload,
  }),
  [ACTIONS.CHANGE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm({
  initialKeyword = "",
  initialRating = "g",
} = {}) {
  const [{ keyword, rating }, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  const changeKeyword = useCallback(
    ({ keyword }) =>
      dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    []
  );

  const changeRating = ({ rating }) =>
    dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating });

  return {
    changeKeyword,
    changeRating,
    keyword,
    rating,
  };
}
