import CastItem from "components/CastItem/CastItem";

const { CastList } = require("./CastGallery.styled");

function CastGallery ({cast}) {
    return (
        <CastList>
            {cast.map(item => (
                <CastItem key={item.id} item={item} />
            ))}
        </CastList>
    )
}

export default CastGallery;