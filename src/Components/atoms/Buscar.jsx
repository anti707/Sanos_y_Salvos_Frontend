function Buscar({ value, onChange, onKeyDown }) {
  return (
    <input
      type="text"
      className="nav-search" 
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Buscar..."
    />
  );
}

export default Buscar;