const reviewsReducer = (
  state = {
    reviews: [],
  },
  action,
) => {
  if (action.type === 'SET_REVIEWS') {
    state = {
      reviews: action.payload,
    };
  }

  return state;
};

export default reviewsReducer;
