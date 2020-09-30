import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { name, slug, images } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="signle room" />
        <Link to={`/Design/${slug}`} className="btn-primary room-link">
          Explore
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
