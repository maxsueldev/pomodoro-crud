import IApplicationState from "../../interface/IApplicationState";
import ITask from "../../interface/ITask";
import CardTask from "./CardTask";
import "./style.scss";

interface ITasksProps {
  state: IApplicationState;
  selectTask: (task: ITask) => void;
  onEditTask: (task: ITask) => void;
}

const Tasks: React.FC<ITasksProps> = ({ state, selectTask, onEditTask }) => {
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
