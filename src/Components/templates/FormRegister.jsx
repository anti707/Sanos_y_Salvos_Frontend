import "../../css/Components/templates/FormRegister.css";


function FormRegister({ content, onChange }) {
    return (
        <div className="form-clean-container">
            
            {/* NOMBRE Y APELLIDOS*/}
            <div className="form-row-double">
                <div className="input-field">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={content.nombre}
                        placeholder="Nombre"
                        onChange={onChange}
                        pattern="^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$" //validar que entren numeros
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Apellidos</label>
                    <input
                        type="text"
                        name="apellido"
                        value={content.apellido}
                        placeholder="Apellidos"
                        onChange={onChange}
                        pattern="^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$"
                        required
                    />
                </div>
            </div>

            {/*CORREO  */}
            <div className="input-field full-width">
                <label>Correo electrónico</label>
                <input
                    type="email"
                    name="correo"
                    value={content.correo}
                    placeholder="Ej. correo@ejemplo.com"
                    onChange={onChange}
                    required
                />
            </div>

            {/* FECHA DE NACIMIENTO Y DIRECCIÓN */}
            <div className="form-row-double">
                <div className="input-field">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        value={content.fechaNacimiento}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        value={content.direccion}
                        placeholder="Ej. Av. Estación 345"
                        onChange={onChange}
                        required
                    />
                </div>
            </div>

            {/*CONTRASEÑA */}
            <div className="input-field full-width">
                <label>Contraseña</label>
                <input
                    type="password"
                    name="contrasena"
                    value={content.contrasena}
                    placeholder="Mínimo 6 caracteres"
                    onChange={onChange}
                    minLength={6}
                    maxLength={25}
                    required
                />
            </div>

        </div>
    );
}

export default FormRegister;