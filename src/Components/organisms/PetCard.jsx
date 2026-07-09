import React from 'react';

function PetCard({
    imagen,
    titulo,
    descripcion,
    ultimaActualizacion,
    altImagen,
    onVerMas
}) {
    return (
        <div className="card mb-3">
            {imagen && (
                <div style={{ height: '550px', overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', backgroundColor: '#f3f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                        src={imagen} 
                        className="card-img-top" 
                        alt={altImagen} 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'fill',
                            objectPosition: 'center',
                            display: 'block',
                            backgroundColor: '#f3f3f3'
                        }}
                    />
                </div>
            )}
            
            <div className="card-body">
                {titulo && <h5 className="card-title">{titulo}</h5>}
                
                {descripcion && <p className="card-text">{descripcion}</p>}
                
                {ultimaActualizacion && (
                    <p className="card-text">
                        <small className="text-body-secondary">
                            {ultimaActualizacion}
                        </small>
                    </p>
                )}

                {onVerMas && (
                    <button className="btn btn-outline-primary mt-2" onClick={onVerMas} type="button">
                        Ver más
                    </button>
                )}
            </div>
        </div>
    );
}

export default PetCard;