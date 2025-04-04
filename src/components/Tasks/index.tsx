import CardTask from "./CardTask";
import ITask from "../../interface/ITask";
import "./style.scss";

interface ApplicationState {
  tasks: ITask[];
  taskSelected: ITask | null;
  editing: boolean;
}

let initialState = {
  tasks: [
    {
      id: 0,
      description: "Estudar Angular",
      completed: false,
    },
    {
      id: 1,
      description: "Estudar React",
      completed: true,
    },
    {
      id: 2,
      description: "Arrumar o quarto",
      completed: false,
    },
  ],
};

const Tasks = () => {
  return (
    <section className="app__section-tasks-container">
      <span className="app__task-selected">#Em andamento</span>

      <ul className="app__tasks-list">
        {initialState.tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
