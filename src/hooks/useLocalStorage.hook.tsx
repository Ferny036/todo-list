import { TareaScheme } from "../models/tarea.model";

const useLocalStorage = () => {

  const initialValue: Array<TareaScheme> = [];
  const getValues = (key: string) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }

  const saveValues = (key: string, valueToStore: Array<TareaScheme>) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return { getValues, saveValues };
}

export default useLocalStorage;