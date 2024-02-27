import PropTypes from "prop-types";

export default function Player({ link, title }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={link}
      title={title}
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

Player.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
