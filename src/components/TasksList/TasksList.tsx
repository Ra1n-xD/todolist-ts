import TasksListItem from './TasksListItem';

const TasksList = ({ todos, deleteTask, completeTask, favoritesTask, updateTaskName }: any) => {
  const tasksList = todos.map((task: any) => {
    const { id, title, completed, favorites } = task;

    let taskStyle = '';
    if (completed) taskStyle += ' task-completed';
    else if (favorites) taskStyle += ' tast-item-favorites';

    return (
      <TasksListItem
        key={id}
        id={id}
        name={title}
        completed={completed}
        styleName={taskStyle}
        deleteTask={deleteTask}
        completeTask={completeTask}
        favoritesTask={favoritesTask}
        updateTaskName={updateTaskName}
      />
    );
  });

  return (
    <div className="task-container">
      <h2 className="task-header">Входящие</h2>
      <ul className="task-list">{tasksList}</ul>
    </div>
  );
};

export default TasksList;