import UseTasks from "../../hooks/UseTasks";
import CardTask from "./CardTask";
import "./style.scss";

const Tasks: React.FC = () => {
  const { state, selectTask, onEditTask } = UseTasks();

  return (
    <section className="app__section-tasks-container">
      <span className="app__task-selected">
        {state.selectedTask ? state.selectedTask.description : "#Em andamento"}
      </span>

      <ul className="app__tasks-list">
        {state.tasks.map((task) => (
          <CardTask
            key={task.id}
            task={task}
            selectTask={selectTask}
            state={state}
            onEditTask={onEditTask}
          />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
