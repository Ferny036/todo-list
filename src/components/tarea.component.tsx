import { TareaScheme } from "../models/tarea.model";

const Tarea = ({ values, onDelete }: { values: TareaScheme, onDelete: Function }) => {

  return (
    <li className='tarea'>
      <div className="info">
        <h3>{values.titulo}</h3>
        <p>{values.descripcion}</p>
      </div>
      <button className="btn btn-danger btn-tarea" onClick={() => onDelete(values.id)}><i className="far fa-circle"></i></button>
    </li>
  );
}

export default Tarea;