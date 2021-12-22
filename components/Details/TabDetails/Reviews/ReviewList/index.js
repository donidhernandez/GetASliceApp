import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import ReviewItem from '../ReviewItem';
import {useSelector} from 'react-redux';

const ReviewList = ({id}) => {
  const selector = useSelector(state => state.reviews);
  const [reviews, setReviews] = useState(selector.reviews);

  useEffect(() => {
    setReviews(selector.reviews);
  }, [selector.reviews]);

  return (
    <ScrollView style={styles.container}>
      {reviews.map((review, index) => {
        return <ReviewItem key={index} review={review} />;
      })}
    </ScrollView>
  );
};

export default ReviewList;
