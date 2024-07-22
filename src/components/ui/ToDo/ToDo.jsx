/**
 *
 * @param {object} props
 * @param {object} todo - Объект ToDo.
 * @param {object} todo.id -  Идентификатор объекта ToDo.
 * @param {object} todo.title -  Текст объекта ToDo.
 * @returns {JSX.Element}
 */
const ToDo = (props) => {
  const { todo } = props;
  return (
    <input
      className="w-min cursor-default read-only:outline-none"
      readOnly
      value={todo.title}
    ></input>
  );
};

export default ToDo;
