import PropTypes from 'prop-types';
import {
    ReviewsList,
    ReviewItem,
    ReviewTitle
} from './ReviewGallery.styled';

function ReviewGallery({ items }) {
    return (
        <ReviewsList>
            {items.map(({ id, author, content }) => (
                <ReviewItem key={id}>
                <ReviewTitle>{author}</ReviewTitle>
                <p>{content}</p>
                </ReviewItem>
            ))}
        </ReviewsList>
    );
}

ReviewGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default ReviewGallery;