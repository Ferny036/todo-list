import { useEffect, useState } from 'react';
import useCRUDTareas from '../hooks/useCRUDTareas.hook';
import { TareaScheme } from '../models/tarea.model';
import '../styles/listaTareas.scss'
import Tarea from './tarea.component'

const ListaTareas = (props: { dia: Date }) => {

  type eventInput = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

  const { setNewTarea, getAllTareas, setDeleteTarea } = useCRUDTareas(props.dia);
  const [tarea, setTarea] = useState<TareaScheme>({ id: "", titulo: "", descripcion: "" });
  const [listaTareas, setListaTareas] = useState<Array<TareaScheme>>([]);
  const [hiddenButton, setHiddenButton] = useState(true);

  const clean = (hiddenValue: boolean) => {
    setHiddenButton(hiddenValue);
    setTarea({
      id: "",
      titulo: "",
      descripcion: ""
    });
  }

  useEffect(() => {
    setListaTareas(getAllTareas());
    clean(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dia])



  const handleTitle = (e: eventInput) => {
    setTarea({ ...tarea, titulo: e.target.value })
  }

  const handleDescription = (e: eventInput) => {
    setTarea({ ...tarea, descripcion: e.target.value })
  }

  const createTarea = () => {
    setListaTareas([...listaTareas, setNewTarea(tarea, listaTareas)])
    clean(true);
  }

  const handleDelete = (id: string) => {
    setListaTareas(setDeleteTarea(id, listaTareas));
  }

  const handleHiddenButton = () => {
    clean(!hiddenButton);
  }

  return (
    <>
      <ul className="list">
        {listaTareas.length > 0 ?
          listaTareas.map((tarea: TareaScheme, index: number) => (
            <Tarea key={index} values={tarea} onDelete={handleDelete}></Tarea>
          )) :
          (<h2>No hay tareas para este día, aún!!</h2>)}
      </ul>
      <div className={"controls " + (hiddenButton ? "hidden" : "")}>
        <input id='titleTodo' type="text" placeholder="Titulo" value={tarea.titulo} onChange={(e) => handleTitle(e)} />
        <textarea id='descriptionTodo' placeholder="Descripcion" value={tarea.descripcion} onChange={(e) => handleDescription(e)}></textarea>
        <div className="buttons">
          <button className="btn btn-primary" onClick={createTarea}>
            <i className="fa fa-check"></i>
          </button>
          <button className="btn btn-danger" onClick={handleHiddenButton}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <button className={"btn add btn-primary " + (!hiddenButton ? "hidden" : "")} onClick={handleHiddenButton}>
        <i className="fa fa-plus"></i>
      </button>

    </>
  );
}

export default ListaTareas;