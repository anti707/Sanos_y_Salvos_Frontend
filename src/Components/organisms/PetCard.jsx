import React from 'react';

function PetCard({
    imagen,
    titulo,
    descripcion,
    ultimaActualizacion,
    altImagen
}) {
    return (
        
            <div className="card mb-3">
                {imagen && (
                    <img 
                        src={imagen} 
                        className="card-img-top" 
                        alt={altImagen} 
                    />
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
                    </div>
            </div>
        
    );
}

export default PetCard;