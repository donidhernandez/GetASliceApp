import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import ReviewItem from '../ReviewItem';
import axios from 'axios';
import {YELP_API_KEY} from '../../../../../constants/api_key';

const ReviewList = ({id}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const yelpURL = `https://api.yelp.com/v3/businesses/${id}/reviews`;
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
      const res = await axios
        .get(yelpURL, apiOptions)
        .catch(e => console.log(e));

      return res.data.reviews;
    };
    getReviews().then(res => setReviews(res));

    return () => {
      setReviews([]);
    };
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      {reviews.map((review, index) => {
        return <ReviewItem key={index} review={review} />;
      })}
    </ScrollView>
  );
};

export default ReviewList;
