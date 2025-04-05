import IApplicationState from "../../../interface/IApplicationState";
import ITask from "../../../interface/ITask";
import { MdEdit } from "react-icons/md";
import "./style.scss";

interface ICardTaskProps {
  task: ITask;
  state: IApplicationState;
  selectTask: (task: ITask) => void;
  onEditTask: (task: ITask) => void;
}

const CardTask: React.FC<ICardTaskProps> = ({
  task,
  state,
  selectTask,
  onEditTask,
}) => {
  const handleSelectTask = () => {
    selectTask(task);
  };

  const onEdit = () => {
    onEditTask(task);
  };

  return (
    <li
      className={`app__tasks-item ${
        task.completed
          ? "app__tasks-item-completed"
          : "app__tasks-item-notCompleted"
      } ${state.selectedTask === task ? "task-selected" : ""}`}
      onClick={handleSelectTask}
    >
      {task.description}
      <div className="app__tasks-item--actions">
        <button onClick={onEdit}>
          <MdEdit />
        </button>
      </div>
    </li>
  );
};

export default CardTask;
