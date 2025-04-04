import "./style.scss";

interface ITask {
  id: number;
  description: string;
  completed: string;
}

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
          <li>{task.description}</li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
