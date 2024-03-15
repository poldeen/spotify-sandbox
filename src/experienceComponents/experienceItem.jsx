import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const ExperienceItem = ({ image, title, description, style }) => (
  // <Flex alignItems="center" className="position-relative mb-2">
  <>
    <div>
      <FontAwesomeIcon icon={image} className={style + " fs-1 me-3"} />
    </div>
    <div>
      <h6 className="fs-9 mb-0">
        <a className={style + " stretched-link"} href="#!">
          {title}
        </a>
      </h6>
      <p className="mb-1">{description}</p>
    </div>
  </>
  // </Flex>
);

ExperienceItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceItem;
