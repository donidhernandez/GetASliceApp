const locationReducer = (
  state = {
    location: {
      latitude: '',
      longitude: '',
    },
    business: {
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

  if (action.type === 'SET_BUSINESSES_LOCATION') {
    state = {
      ...state,
      business: action.payload,
    };
  }

  return state;
};

export default locationReducer;
