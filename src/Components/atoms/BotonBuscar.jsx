function BotonBuscar({ onClick }) {
    return (
        <button
            className="btn-search"
            onClick={onClick}
            style={{
                border: 'none',
                borderRadius: '999px',
                padding: '10px 18px',
                background: 'linear-gradient(135deg, #41a4af 0%, #2f7f89 100%)',
                color: '#fff',
                fontWeight: 700,
                boxShadow: '0 6px 14px rgba(47, 127, 137, 0.2)'
            }}
        >
            Buscar
        </button>
    );
}

export default BotonBuscar;