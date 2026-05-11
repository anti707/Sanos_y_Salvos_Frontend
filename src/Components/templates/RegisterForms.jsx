function RegisterForms({ content, onChange}) {

  return (
    <div> 

      <input
        type="email"
        name="correo"
        value={content.correo}
        placeholder="Correo"
        onChange={onChange}
      />

      <input
        type="password"
        name="contrasena"
        value={content.contrasena}
        placeholder="Contraseña"
        onChange={onChange}
      />

      <input
        type="password"
        name="confirmarContrasena"
        value={content.confirmarContrasena}
        placeholder="Confirmar Contraseña"
        onChange={onChange}
      />

      <input
        type="text"
        name="nombre"
        value={content.nombre}
        placeholder="Nombre"
        onChange={onChange}
      />

      <input
        type="text"
        name="apellido"
        value={content.apellido}
        placeholder="Apellido"
        onChange={onChange}
      />

      <input
        type="text"
        name="numeroTelefono"
        value={content.numeroTelefono}
        placeholder="Número de Teléfono"
        onChange={onChange}
      />

    </div>
  );
}

export default RegisterForms;