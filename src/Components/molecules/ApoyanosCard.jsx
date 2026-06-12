import "../../css/Components/molecules/ApoyanosCard.css";


function ApoyanosCard() {
  return (

    <div className="row row-cols-2 row-cols-md-4 g-4" style={{ maxWidth: "78rem", margin: "0 auto" }}>
      

      <div className="col">
        <div className="card border-info custom-card h-100">
          <div className="card-header" >Manitas al rescate</div>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "cadetblue" }}>Ayudanos con:</h5>
            <h5 className="card-title" style={{ color: "cadetblue" }}>$1.000</h5>
            <p className="card-text">°Mantener nuestros servidores en funcionamiento.
            </p>
          </div>
        </div>
      </div>


      <div className="col">
        <div className="card border-info custom-card h-100">
          <div className="card-header">Patitas guardianas</div>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "cadetblue" }}>Ayudanos con:</h5>
            <h5 className="card-title" style={{ color: "cadetblue" }}>$5.000</h5>
            <p className="card-text">°Mantener nuestros servidores en funcionamiento.</p>
            <p className="card-text">°Proteger contra fraudes.</p>
          </div>
        </div>
      </div>


      <div className="col">
        <div className="card border-info custom-card h-100">
          <div className="card-header">estrella para patitas perdidas</div>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "cadetblue" }}>Ayudanos con:</h5>
            <h5 className="card-title" style={{ color: "cadetblue" }}>$10.000</h5>
            <p className="card-text">°Mantener nuestros servidores en funcionamiento.</p>
            <p className="card-text">°Proteger contra fraudes.</p>
            <p className="card-text">°Fortalecer nuestro equipo de apoyo para encontrar a las mascotas.</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card border-info custom-card h-100">
          <div className="card-header">Angeles de patitas</div>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "cadetblue" }}>Ayudanos con:</h5>
            <h5 className="card-title" style={{ color: "cadetblue" }}>$20.000</h5>
            <p className="card-text">°Mantener nuestros servidores en funcionamiento.</p>
            <p className="card-text">°Proteger contra fraudes.</p>
            <p className="card-text">°Fortalecer nuestro equipo de apoyo para encontrar a las mascotas.</p>
            <p className="card-text">°mejorar nuestra geolocalizacion.</p>
          </div>
        </div>
      </div>

    </div> 
  );
}

export default ApoyanosCard;