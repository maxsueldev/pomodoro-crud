import { createContext, useState } from "react";
import IApplicationState from "../interface/IApplicationState";

interface ITasksContext {
  state: IApplicationState;
  setState: React.Dispatch<React.SetStateAction<IApplicationState>>;
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const TasksContext = createContext<ITasksContext>({
  state: {
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
  },
  setState: () => {},
  openForm: false,
  setOpenForm: () => {},
});

TasksContext.displayName = "TasksContext";

const TasksProvider = ({ children }: React.PropsWithChildren) => {
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

  const [state, setState] = useState<IApplicationState>(initialState);
  const [openForm, setOpenForm] = useState<boolean>(false);

  return (
    <TasksContext.Provider value={{ state, setState, openForm, setOpenForm }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
