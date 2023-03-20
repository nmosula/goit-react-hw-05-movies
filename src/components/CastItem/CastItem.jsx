import PropTypes from 'prop-types';
import {
  ItemCard,
  ItemPhoto,
  ItemInfoText,
  ItemInfoWrapper,
  ItemSpanText,
} from './CastItem.styled';

function CastItem({ item: { name, profile_path, character } }) {
  return (
    <ItemCard>
      <ItemPhoto src={profile_path} alt={name} title={name} />
      <ItemInfoWrapper>
        <ItemInfoText>
          <ItemSpanText>Name:</ItemSpanText> {name}
        </ItemInfoText>
        <ItemInfoText>
          <ItemSpanText>Character:</ItemSpanText> {character}
        </ItemInfoText>
      </ItemInfoWrapper>
    </ItemCard>
  );
}

CastItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePath: PropTypes.string,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastItem;