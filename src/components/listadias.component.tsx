import DiaElement from "./diaelement.component";
import "../styles/listadias.scss"

const ListaDias = ({ day, updateDay }: { day: Date, updateDay: Function }) => {

  const diasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado"];
  const addDays = (date: Date, days?: number) => getSliceDate(date, days).getDate();
  const getSliceDate = (date: Date, days?: number) => new Date(date.getTime() + (1000 * 60 * 60 * 24) * (days ?? 0));

  const determinateDay = (dia: Date, rest?: number) => {
    const determinant: number = (dia.getDay() + (rest ?? 0)) % 7;
    return diasSemana[determinant < 0 ? 6 : determinant]
  };

  const handleUpdateDay = (dia: number) => {
    const newDate: Date = getSliceDate(day, dia - day.getDate());
    updateDay(newDate);
  }

  return (
    <nav>
      <ul className="dias-scheme">
        <DiaElement
          scheme={{ dia: addDays(day, -1), nombre: determinateDay(day, -1) }}
          onClick={handleUpdateDay} />
        <DiaElement
          scheme={{ dia: addDays(day), nombre: determinateDay(day), isDiaActual: true }}
          onClick={handleUpdateDay} />
        <DiaElement
          scheme={{ dia: addDays(day, 1), nombre: determinateDay(day, 1) }}
          onClick={handleUpdateDay} />
        <DiaElement
          scheme={{ dia: addDays(day, 2), nombre: determinateDay(day, 2) }}
          onClick={handleUpdateDay} />
      </ul>
    </nav>
  );
}

export default ListaDias;