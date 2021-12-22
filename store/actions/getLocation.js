import axios from 'axios';

import {YELP_API_KEY} from '@env';

const getLocation = id => {
  return async function (dispatch) {
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const res = await axios
      .get(`https://api.yelp.com/v3/businesses/${id}`, apiOptions)
      .catch(e => console.log(e));

    dispatch({
      type: 'SET_BUSINESSES_LOCATION',
      payload: {
        latitude: res.data.coordinates.latitude,
        longitude: res.data.coordinates.longitude,
      },
    });
  };
};

export default getLocation;
