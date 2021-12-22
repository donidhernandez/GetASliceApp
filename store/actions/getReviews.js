import axios from 'axios';

import {YELP_API_KEY} from '@env';

const getReviews = id => {
  return async function (dispatch) {
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const yelpURL = `https://api.yelp.com/v3/businesses/${id}/reviews`;

    const res = await axios.get(yelpURL, apiOptions).catch(e => console.log(e));

    console.log(res.data.reviews);

    dispatch({
      type: 'SET_REVIEWS',
      payload: res.data.reviews,
    });
  };
};

export default getReviews;
