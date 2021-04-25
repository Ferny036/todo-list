import "../styles/diaScheme.scss"
interface DayScheme {
  dia: number,
  nombre: string,
  isDiaActual?: boolean
}

const DiaElement = ({ scheme, onClick }: { scheme: DayScheme, onClick: Function }) => {
  return (
    <li
      className={scheme.isDiaActual ? "scheme actual-day" : "scheme"}
      onClick={() => onClick(scheme.dia)}>
      <span>{scheme.dia}</span>
      <p>{scheme.nombre}</p>
    </li>
  );
}

export default DiaElement;