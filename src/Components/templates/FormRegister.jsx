function FormRegister({ content, onChange }) {
    return (
        <div className="form-clean-container">
            
            {/* FILA 1: NOMBRE Y APELLIDOS JUNTOS */}
            <div className="form-row-double">
                <div className="input-field">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={content.nombre}
                        placeholder="Nombre"
                        onChange={onChange}
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
                        required
                    />
                </div>
            </div>

            {/* FILA 2: CORREO (ANCHO COMPLETO) */}
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

            {/* FILA 3: FECHA DE NACIMIENTO Y DIRECCIÓN JUNTAS */}
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

            {/* FILA 4: CONTRASEÑA (ANCHO COMPLETO) */}
            <div className="input-field full-width">
                <label>Contraseña</label>
                <input
                    type="password"
                    name="contrasena"
                    value={content.contrasena}
                    placeholder="Mínimo 6 caracteres"
                    onChange={onChange}
                    required
                />
            </div>

        </div>
    );
}

export default FormRegister;