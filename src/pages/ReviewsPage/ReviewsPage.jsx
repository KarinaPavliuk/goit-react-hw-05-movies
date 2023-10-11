import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/movies';
import { useState, useEffect } from 'react';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        const normalisedReviews = response.results.map(
          ({ author, content, id }) => ({
            author,
            content,
            id,
          })
        );

        setReview(normalisedReviews);
      } catch (error) {
        alert(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {review?.length ? (
          review?.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default ReviewsPage;
