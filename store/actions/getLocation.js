import GetLocation from '../../constants/location';

const getLocation = () => {
  return function (dispatch) {
    const {latitude, longitude} = GetLocation();
    console.log(latitude);
    dispatch({type: 'SET_LOCATION', payload: {latitude, longitude}});
  };
};

export default getLocation;
