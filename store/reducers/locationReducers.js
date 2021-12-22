const locationReducer = (
  state = {
    location: {
      latitude: '',
      longitude: '',
    },
  },
  action,
) => {
  if (action.type === 'SET_LOCATION') {
    state = {
      ...state,
      location: action.payload,
    };
  }

  return state;
};

export default locationReducer;
