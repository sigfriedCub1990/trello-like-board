import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Column, Card, Title, TasksList } from "../../styles/Base";
import PropTypes from "prop-types";

//* Components
import CardComponent from "../Card/Card";

const ColumnComponent = props => {
  return (
    <Column>
      <Title> {props.column.title} </Title>
      <Droppable droppableId={props.column.id}>
        {provided => (
          <TasksList ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <CardComponent key={task.id} index={index} card={task} />
            ))}
            {provided.placeholder}
          </TasksList>
        )}
      </Droppable>
    </Column>
  );
};

//* TODO: Add validations
ColumnComponent.propTypes = {};

export default ColumnComponent;
