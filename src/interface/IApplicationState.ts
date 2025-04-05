import ITask from "./ITask";

interface IApplicationState {
  tasks: ITask[];
  selectedTask: ITask | null;
  editing: boolean;
}

export default IApplicationState;
