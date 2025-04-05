import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "../context/TasksContext";
import ITask from "../interface/ITask";

const UseTasks = () => {
  const { state, setState, openForm, setOpenForm } = useContext(TasksContext);

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

  return {
    tasks: state.tasks,
    selectedTasks: state.selectedTask,
    editing: state.editing,
    openForm,
    selectTask,
    clearStateForm,
    changeOpenForm,
    state,
    onEditTask,
    onDeleteTask,
    onSaveTask,
    changeCompletedTask,
  };
};

export default UseTasks;
