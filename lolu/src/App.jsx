import { useState, useEffect } from "react";
import "./App.css";

const productos = {
  parejas: [
    {
      nombre: "Caja Love",
      precio: "$15.000",
      imagen:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000",
    },

    {
      nombre: "Carta + Chocolates",
      precio: "$8.500",
      imagen:
        "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000",
    },
  ],

  sorpresas: [
    {
      nombre: "Caja Sorpresa",
      precio: "$12.000",
      imagen:
        "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000",
    },
  ],

  peluches: [
    {
      nombre: "Osito Love",
      precio: "$10.000",
      imagen:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000",
    },
  ],

  ramos: [
    {
      nombre: "Ramo Rosas",
      precio: "$18.000",
      imagen:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1000",
    },
  ],
};


function App() {

  const [categoriaActiva, setCategoriaActiva] =
    useState("parejas");

  const [carrito, setCarrito] = useState([]);

  const [observacion, setObservacion] = useState("");

  const [mensajeActivo, setMensajeActivo] =
  useState(0);

  const total = carrito.reduce((acum, producto) => {

  const precio = Number(
    producto.precio
      .replace("$", "")
      .replace(".", "")
  );

  return acum + precio;

}, 0);

const mensajeWhatsApp = `
*Hola! <3*

Quiero comprar:

ᨳଓ ${carrito.map(
  (producto) => producto.nombre
).join("\nᨳଓ ")}

. ݁⋆ ۶ৎ ݁˖ .

*Observaciones:*

${observacion || "Sin observaciones"}

≽^• ˕ • ྀི≼

*Total:* $${total.toLocaleString("es-AR")}
`; 

const mensajesInfo = [
  "🚚 Envíos a todo el país por Correo Argentino",
  "📍 Retiro por Palermo, CABA",
  "🎀 Transformamos regalos en recuerdos",
  "💌 Pequeños detalles, grandes emociones"
];

useEffect(() => {

  const intervalo = setInterval(() => {

    setMensajeActivo((prev) =>
      (prev + 1) % mensajesInfo.length
    );

  }, 5000);

  return () => clearInterval(intervalo);

}, []);

  const [mostrarCarrito, setMostrarCarrito] =
  useState(false);

const tieneProductos = carrito.length > 0;

const tieneObservacion =
  observacion.trim() !== "";


  return (
    <div className="app">

      <nav className="navbar">

        <div className="info-bar">
  {mensajesInfo[mensajeActivo]}
</div>
        <h1>
  LOLU <span>✧ ೃ༄*ੈ✩</span>
</h1>

        <div className="menu">
  <a href="#">Inicio</a>
  <a href="#">Catálogo</a>
  <a href="#">Contacto</a>

 <div
  className="cart"
  onClick={() => setMostrarCarrito(!mostrarCarrito)}
>
  🛒 <span>({carrito.length})</span>
</div>

</div>

{mostrarCarrito && (
  <div
    className="overlay"
    onClick={() => setMostrarCarrito(false)}
  />
)}

{mostrarCarrito && (
  <div className="carrito-panel">
  <div className="carrito-header">
  <h3>Tu carrito</h3>

  <button
    className="cerrar-carrito"
    onClick={() => setMostrarCarrito(false)}
  >
    ✕
  </button>
</div>

  {carrito.length === 0 ? (

 <p className="carrito-vacio">
 Todavía no agregaste un regalo 💜
</p>

) : (
  carrito.map((producto, index) => (

   <div key={index} className="item-carrito">

  <img
    src={producto.imagen}
    alt={producto.nombre}
  />

  <div className="item-info">

    <h4>{producto.nombre}</h4>

    <p>{producto.precio}</p>

  <button
  onClick={() =>
    setCarrito(
      carrito.filter((_, i) => i !== index)
    )
  }
>
  🗑️ Eliminar
</button>

  </div>

</div>

  ))
)}

<label className="observaciones-label">
 ᭪༊ ¿Querés contarnos algo?
</label>

<textarea
  className="observaciones"
  placeholder="Ej: agregar tarjeta, envío o retiro, color favorito..."
  value={observacion}
  onChange={(e) => setObservacion(e.target.value)}
/>

<hr />

<h2 className="total-carrito">
  Total: $
  {total.toLocaleString("es-AR")}
</h2>


{
  tieneProductos || tieneObservacion ? (

    <a
      className="btn-finalizar"
      href={`https://wa.me/5491160328221?text=${encodeURIComponent(mensajeWhatsApp)}`}
      target="_blank"
      rel="noreferrer"
    >
      {tieneProductos
        ? "Finalizar Pedido"
        : "Enviar consulta ݁✮⋆"}
    </a>

  ) : (

    <button
      className="btn-finalizar btn-disabled"
      disabled
    >
      Agregá un producto o escribinos
    </button>

  )
}

  </div>

)}

      </nav>

      <section className="hero">
  <div className="hero-text">
    <h2>Detalles que cuentan historias ♡</h2>

    <p>
      Detalles únicos y personalizados para sorprender
      a la persona que más querés.
    </p>

    <button>Ver Catálogo</button>
  </div>

  <div className="hero-image">
    <img
      src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a"
      alt="regaleria"
    />
  </div>
</section>

<section className="categorias">
  <h3>Categorías</h3>

  <div className="categorias-grid">

    <div
  className={`card ${
    categoriaActiva === "parejas" ? "activa" : ""
  }`}
  onClick={() => setCategoriaActiva("parejas")}
>
      <span>💝</span>
      <span>Parejas</span>
    </div>
<div
  className={`card ${
    categoriaActiva === "sorpresas" ? "activa" : ""
  }`}
  onClick={() => setCategoriaActiva("sorpresas")}
>
      <span>🎁</span>
      <span>Sorpresas</span>
    </div>

    <div
  className={`card ${
    categoriaActiva === "peluches" ? "activa" : ""
  }`}
  onClick={() => setCategoriaActiva("peluches")}
>
      <span>🧸</span>
      <span>Peluches</span>
    </div>

    <div
  className={`card ${
    categoriaActiva === "ramos" ? "activa" : ""
  }`}
  onClick={() => setCategoriaActiva("ramos")}
>
      <span>🌸</span>
      <span>Ramos</span>
    </div>

  </div>
</section>

      <section className="destacados">
  <h3>Productos Destacados</h3>

  <div className="cards">

    {productos[categoriaActiva].map((producto, index) => (

      <div className="producto" key={index}>

        <img
          src={producto.imagen}
          alt={producto.nombre}
        />

        <h4>{producto.nombre}</h4>

        <p className="precio">
          {producto.precio}
        </p>

<button
  onClick={() =>
  setCarrito([...carrito, producto])
}
>
  Comprar
</button>

      </div>

    ))}

  </div>

</section>
    </div>
  );
}

export default App;