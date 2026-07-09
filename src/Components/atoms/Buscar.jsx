function Buscar({ value, onChange, onKeyDown }) {
  return (
    <input
      type="text"
      className="nav-search"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Buscar..."
      style={{
        border: '1px solid #b7dce2',
        borderRadius: '999px',
        padding: '10px 16px',
        minWidth: '220px',
        outline: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      }}
    />
  );
}

export default Buscar;