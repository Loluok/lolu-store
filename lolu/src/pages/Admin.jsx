import logoLolu from "../assets/logo-lolu.png";

function Admin() {
  return (
    <div className="admin">

      <img
        src={logoLolu}
        alt="LOLU"
        className="admin-logo"
      />

      <h1>LOLU Admin</h1>

      <h2>Agregar producto</h2>

      <div className="admin-form">

        <input
          type="text"
          placeholder="Nombre"
        />

        <input
          type="text"
          placeholder="Precio"
        />

        <select>
          <option>Parejas</option>
          <option>Sorpresas</option>
          <option>Peluches</option>
          <option>Ramos</option>
        </select>

        <button>
          Guardar producto
        </button>

      </div>

      <h2 className="admin-subtitle">
  Productos cargados
</h2>

<div className="productos-admin-vacio">

  No hay productos cargados todavía 🌸

</div>

    </div>


  );
}

export default Admin;