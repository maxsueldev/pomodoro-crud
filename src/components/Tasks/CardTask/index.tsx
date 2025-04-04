import ITask from "../../../interface/ITask";
import { MdEdit, MdDelete } from "react-icons/md";
import "./style.scss";

interface ICardTaskProps {
  task: ITask;
}

const CardTask: React.FC<ICardTaskProps> = ({ task }) => {
  return (
    <li
      className={`app__tasks-item ${
        task.completed
          ? "app__tasks-item-completed"
          : "app__tasks-item-notCompleted"
      }`}
    >
      {task.description}
      <div className="app__tasks-item--actions">
        <MdEdit />
        <MdDelete />
      </div>
    </li>
  );
};

export default CardTask;
