import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IApplicationState from "./interface/IApplicationState";
import ITask from "./interface/ITask";
import Pomodoro from "./components/Pomodoro";
import Tasks from "./components/Tasks";
import FormAddTask from "./components/FormAddTask";

const initialState: IApplicationState = {
  tasks: [
    {
      id: "0",
      description: "Estudar Angular",
      completed: false,
    },
    {
      id: "1",
      description: "Estudar React",
      completed: true,
    },
    {
      id: "2",
      description: "Arrumar o quarto",
      completed: false,
    },
  ],
  selectedTask: null,
  editing: false,
};

function App() {
  const [state, setState] = useState<IApplicationState>(initialState);
  const [openForm, setOpenForm] = useState<boolean>(false);

  const selectTask = (task: ITask) => {
    setState({
      ...state,
      selectedTask: task,
      editing: true,
    });
  };

  const clearStateForm = () => {
    setState({
      ...state,
      selectedTask: null,
      editing: false,
    });
  };

  const changeOpenForm = () => {
    setOpenForm(!openForm);
  };

  const onEditTask = (task: ITask) => {
    setState({
      ...state,
      selectedTask: task,
      editing: true,
    });

    setOpenForm(true);
  };

  const onDeleteTask = (task: ITask | null) => {
    setState({
      ...state,
      tasks: state.tasks.filter((t) => t !== task),
      selectedTask: null,
      editing: false,
    });

    setOpenForm(false);
  };

  const onSaveTask = (task: ITask | null, textarea: string) => {
    if (task) {
      const newTasks = state.tasks.map((t) =>
        t.id === task.id ? { ...t, description: textarea } : t
      );

      setState({
        ...state,
        tasks: newTasks,
        selectedTask: null,
        editing: false,
      });
    } else {
      const newTask = {
        id: uuidv4(),
        description: textarea,
        completed: false,
      };

      setState({
        ...state,
        tasks: [...state.tasks, newTask],
        selectedTask: null,
        editing: false,
      });
    }

    setOpenForm(false);
  };

  const changeCompletedTask = (task: ITask) => {
    const newTasks = state.tasks.map((t) =>
      t === task ? { ...t, completed: true } : t
    );

    setState({
      ...state,
      tasks: newTasks,
      selectedTask: null,
      editing: false,
    });
  };

  return (
    <main className="app">
      <Pomodoro state={state} changeCompletedTask={changeCompletedTask} />
      <Tasks state={state} selectTask={selectTask} onEditTask={onEditTask} />
      <FormAddTask
        state={state}
        clearStateForm={clearStateForm}
        changeOpenForm={changeOpenForm}
        openForm={openForm}
        onDeleteTask={onDeleteTask}
        onSaveTask={onSaveTask}
      />
    </main>
  );
}

export default App;
