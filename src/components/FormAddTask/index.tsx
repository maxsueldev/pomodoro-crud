import { MdCancel, MdDelete, MdOutlineAdd, MdSave } from "react-icons/md";
import "./style.scss";

const FormAddTask = () => {
  return (
    <>
      <button className="app__button--add-task">
        <MdOutlineAdd />
        Adicionar nova tarefa
      </button>
      <form className="app__form-add-task hidden">
        <label className="app__form-label">Adicionando Tarefa</label>
        <textarea
          required
          className="app__form-textarea"
          placeholder="No que você está trabalhando?"
        ></textarea>
        <footer>
          <button className="app__form-footer-button app__form-footer-button--delete">
            <MdDelete />
            Deletar
          </button>
          <button className="app__form-footer-button app__form-footer-button--cancel">
            <MdCancel />
            Cancelar
          </button>
          <button className="app__form-footer-button app__form-footer-button--save">
            <MdSave />
            Salvar
          </button>
        </footer>
      </form>
    </>
  );
};

export default FormAddTask;
