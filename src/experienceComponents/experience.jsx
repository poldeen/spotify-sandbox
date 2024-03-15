import PropTypes from "prop-types";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ExperienceItem from "./experienceItem";

const Experience = ({
  associations = [
    {
      image: "globe-americas",
      title: "Customer Web",
      description: "3243 associates",
      style: "text-secondary",
    },
    {
      image: "user-circle",
      title: "Customer Care",
      description: "7652 associates",
      style: "text-success",
    },
    {
      image: "chart-pie",
      title: "Reporting",
      description: "765 associates",
      style: "text-success",
    },

    {
      image: "user-tie",
      title: "Program Administration",
      description: "34598 associates",
      style: "text-warning",
      to: "#!",
    },
    {
      image: "tools",
      title: "Product Administration",
      description: "54 associates",
      style: "text-danger",
    },
  ],
  colBreakpoints = { sm: 6, md: 4 },
  ...rest
}) => {
  return (
    <Card {...rest}>
      <Card.Header className="bg-body-tertiary">
        <h5 className="mb-0">Experiences Provided</h5>
      </Card.Header>
      <Card.Body className="fs-10">
        <Row className="g-3">
          {associations.map((association) => (
            <Col key={association.title} {...colBreakpoints}>
              <ExperienceItem
                image={association.image}
                title={association.title}
                description={association.description}
                style={association.style}
                to={association.to}
              />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

Experience.propTypes = {
  associations: PropTypes.arrayOf(PropTypes.shape(ExperienceItem.propTypes)),
  colBreakpoints: PropTypes.object,
};

export default Experience;
