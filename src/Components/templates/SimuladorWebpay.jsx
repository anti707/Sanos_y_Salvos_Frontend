import { useState } from 'react';

function SimuladorWebpay() {
  const [cargando, setCargando] = useState(false);

  const procesarPagoSimulado = () => {
    setCargando(true);
    

    setTimeout(() => {
      // Redirigimos al voucher configurado
      window.location.href = "http://localhost:5173/Apoyanos";
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        
        {/* Logo de Webpay */}
        <h2 style={{ color: '#e2001a', margin: '0 0 10px 0', fontWeight: 'bold' }}>Webpay<span style={{ color: '#007ab7' }}>plus</span></h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '25px' }}>Prueba</p>

        {cargando ? (
          <div>
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
            <p style={{ marginTop: '15px', color: '#333', fontWeight: '500' }}>Conectando de forma segura con el banco...</p>
          </div>
        ) : (
          <div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '6px', textAlign: 'left', marginBottom: '20px', fontSize: '14px' }}>
              <div style={{ marginBottom: '5px' }}><strong>Comercio:</strong> Sanos y Salvos</div>
              <div style={{ marginBottom: '5px' }}><strong>Monto:</strong> $5.000 CLP</div>
              <div><strong>Orden:</strong> WEB-{Math.floor(Math.random() * 90000)}</div>
            </div>

            <button 
              onClick={procesarPagoSimulado} 
              className="btn btn-success w-100 py-2" 
              style={{ backgroundColor: '#e2001a', borderColor: '#e2001a', fontWeight: 'bold' }}
            >
              PAGAR
            </button>
            
            <small style={{ display: 'block', marginTop: '15px', color: '#999' }}>
              Esta ventana emula el puente de Transbank.
            </small>
          </div>
        )}
      </div>
    </div>
  );
}

export default SimuladorWebpay;