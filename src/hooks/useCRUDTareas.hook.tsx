import { TareaScheme } from "../models/tarea.model";
import useLocalStorage from "./useLocalStorage.hook"
import useRandom from "./useRandom.hook";

const useCRUDTareas = (dayArg: Date) => {

  const getDateKey = (arg: Date) =>
    arg.getFullYear().toString() + '-' +
    arg.getUTCMonth().toString() + '-' +
    arg.getDate().toString()

  const generateRandomId = useRandom();
  const { getValues, saveValues } = useLocalStorage();

  const setNewTarea = (tarea: TareaScheme, lista: Array<TareaScheme>) => {
    const newTarea: TareaScheme = {
      ...tarea,
      id: generateRandomId()
    };
    const newArray: Array<TareaScheme> = [...lista, newTarea];
    saveValues(getDateKey(dayArg), newArray);
    return newTarea;
  }

  const getAllTareas = () => getValues(getDateKey(dayArg));

  const setDeleteTarea = (id: string, lista: Array<TareaScheme>) => {
    const newArray: Array<TareaScheme> = lista.filter((tarea: TareaScheme) => tarea.id !== id);
    saveValues(getDateKey(dayArg), newArray);
    return newArray;
  }

  return { setNewTarea, getAllTareas, setDeleteTarea };
}

export default useCRUDTareas;