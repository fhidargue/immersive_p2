import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Timeline = (props) => {
  const { page } = props;

  return (
    <section className="timeline">
      <ul className="timeline__options">
        <li className="timeline__list">
          <Link className={`timeline__link`} to={"/"}>
            Home
          </Link>
        </li>
        <li className="timeline__list">{`> ${page}`}</li>
      </ul>
    </section>
  );
};

Timeline.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Timeline;
