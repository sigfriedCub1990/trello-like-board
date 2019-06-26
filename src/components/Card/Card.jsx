import React, { Component } from "react";
import { Card } from "../../styles/Base";
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

const CardComponent = props => {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {provided => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.card.content}
        </Card>
      )}
    </Draggable>
  );
};

export default CardComponent;
