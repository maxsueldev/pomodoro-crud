import { useEffect, useState } from "react";
import { MdCancel, MdDelete, MdOutlineAdd, MdSave } from "react-icons/md";
import "./style.scss";
import IApplicationState from "../../interface/IApplicationState";
import ITask from "../../interface/ITask";

interface FormAddTaskProps {
  state: IApplicationState;
  clearStateForm: () => void;
  changeOpenForm: () => void;
  openForm: boolean;
  onDeleteTask: (task: ITask | null) => void;
  onSaveTask: (task: ITask | null, textarea: string) => void;
}

const FormAddTask: React.FC<FormAddTaskProps> = ({
  state,
  changeOpenForm,
  openForm,
  onDeleteTask,
  onSaveTask,
}) => {
  const [textarea, setTextarea] = useState<string>("");

  useEffect(() => {
    if (state.selectedTask) {
      setTextarea(state.selectedTask.description);
    } else {
      setTextarea("");
    }
  }, [state.selectedTask]);

  const cancelForm = () => {
    setTextarea("");
    changeOpenForm();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSaveTask(state.selectedTask, textarea);
    cancelForm();
  };

  return (
    <>
      <button
        className="app__button--add-task"
        onClick={() => changeOpenForm()}
      >
        <MdOutlineAdd />
        Adicionar nova tarefa
      </button>
      <form
        onSubmit={handleSubmit}
        className={`app__form-add-task ${openForm ? "" : "hidden"}`}
      >
        <h2 className="app__form-label">
          {state.selectedTask ? "Editando tarefa" : "Adicionando tarefa"}
        </h2>
        <textarea
          required
          className="app__form-textarea"
          placeholder="No que você está trabalhando?"
          onChange={(e) => setTextarea(e.target.value)}
          value={textarea}
        ></textarea>
        <footer>
          <button
            className="app__form-footer-button app__form-footer-button--delete"
            type="button"
            onClick={() => onDeleteTask(state.selectedTask)}
          >
            <MdDelete />
            Deletar
          </button>
          <button
            className="app__form-footer-button app__form-footer-button--cancel"
            type="button"
            onClick={cancelForm}
          >
            <MdCancel />
            Cancelar
          </button>
          <button
            className="app__form-footer-button app__form-footer-button--save"
            type="submit"
          >
            <MdSave />
            Salvar
          </button>
        </footer>
      </form>
    </>
  );
};

export default FormAddTask;
