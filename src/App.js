import React, { useState } from "react";
import { MainContainer, Column } from "./styles/Base";
import data from "./mocks/data";
import { DragDropContext } from "react-beautiful-dnd";

//* Components
import ColumnComponent from "./components/Column/Column";

const App = () => {
  const [tasks, setTasks] = useState(data);

  const onDragEnd = results => {
    console.log(results);
    const { destination, source, draggableId } = results;
    if (
      source.index == destination.index &&
      destination.droppableId == source.droppableId
    ) {
      return;
    } else {
      const column = tasks.columns[source.droppableId];
      const newTasksIds = Array.from(column.tasksIds);
      //* Remove index
      newTasksIds.splice(source.index, 1);
      //* Insert new index in a differente position
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        tasksIds: newTasksIds
      };

      //* Don't mutate the state
      const newState = {
        ...tasks,
        columns: {
          ...tasks.columns,
          [newColumn.id]: newColumn
        }
      };

      setTasks(newState);
    }
  };

  return (
    <MainContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {tasks.columnOrder.map(columnId => {
          const column = tasks.columns[columnId];
          const columnTasks = column.tasksIds.map(
            taskId => tasks.tasks[taskId]
          );

          return (
            <ColumnComponent
              key={columnId}
              column={column}
              tasks={columnTasks}
            />
          );
        })}
      </DragDropContext>
    </MainContainer>
  );
};

export default App;
