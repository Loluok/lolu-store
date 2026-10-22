import logoLolu from "../assets/logo-lolu.png";
import { useState } from "react";

function Admin() {

    const [nombre, setNombre] = useState("");
const [precio, setPrecio] = useState("");
const [categoria, setCategoria] = useState("Parejas");
const [productos, setProductos] = useState([]);
const [editandoIndex, setEditandoIndex] = useState(null);
const [imagen, setImagen] = useState("");

  return (
    <div className="admin">



      <img
        src={logoLolu}
        alt="LOLU"
        className="admin-logo"
      />

      <h1>LOLU ADMIN</h1>

      <h2>Agregar producto</h2>

      <div className="admin-form">

       <input
  type="text"
  placeholder="Nombre"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>

  <input
  type="number"
  placeholder="Precio"
  value={precio}
  onChange={(e) =>
    setPrecio(e.target.value)
  }
/>

<input
  type="text"
  placeholder=""https://..."
  value={imagen}
  onChange={(e) =>
    setImagen(e.target.value)
  }
/>

       <select
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
>
  <option>Parejas</option>
  <option>Sorpresas</option>
  <option>Peluches</option>
  <option>Ramos</option>
</select>

        <button
  onClick={() => {


if (
  nombre.trim() === "" ||
  precio.trim() === "" ||
  imagen.trim() === ""
) {
  alert("Completá todos los campos 🌸");
  return;
}

if (Number(precio) <= 0) {
  alert(
    "Ingresá un precio válido 🌸"
  );
  return;
}

const nuevoProducto = {
  nombre,
  precio,
  categoria,
  imagen,
};

if (editandoIndex !== null) {

  const copia = [...productos];

  copia[editandoIndex] = nuevoProducto;

  setProductos(copia);

  setEditandoIndex(null);

} else {

  setProductos([
    ...productos,
    nuevoProducto
  ]);

}


    setNombre("");
    setPrecio("");
    setImagen("");
    setCategoria("Parejas");
  }}
>

 {
  editandoIndex !== null
    ? "Actualizar producto"
    : "Guardar producto"
}

</button>

      </div>

<h2 className="admin-subtitle">
  📦 Productos cargados
</h2>

{productos.length === 0 ? (

  <div className="productos-admin-vacio">
    No hay productos cargados todavía 🌸
  </div>

) : (

  productos.map((producto, index) => (

    <div
      key={index}
      className="producto-admin"
    >
        
    <img
  src={producto.imagen}
  alt={producto.nombre}
  className="preview-admin"
/>

        <h3>
  {producto.nombre}
</h3>

     <p>
  $
  {Number(
    producto.precio
  ).toLocaleString("es-AR")}
</p>
      
      <p>
        {producto.categoria}
      </p>

      <button
  className="btn-eliminar"
  onClick={() =>
    setProductos(
      productos.filter((_, i) => i !== index)
    )
  }
>
  🗑️ Eliminar
</button>

<button
  className="btn-editar"
  onClick={() => {

    setNombre(producto.nombre);

    setPrecio(producto.precio);

    setCategoria(producto.categoria);

    setImagen(producto.imagen);

    setEditandoIndex(index);

  }}
>
  ✏️ Editar
</button>

    </div>

  ))

)}

    </div>
  );
}

export default Admin;