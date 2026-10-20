import { useState } from "react";
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

  const [carrito, setCarrito] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <h1>
  LOLU <span>✧ ೃ༄*ੈ✩</span>
</h1>

        <div className="menu">
  <a href="#">Inicio</a>
  <a href="#">Catálogo</a>
  <a href="#">Contacto</a>

 <div className="cart">
  🛒 <span>({carrito})</span>
</div>
</div>

      </nav>

      <section className="hero">
  <div className="hero-text">
    <h2>Detalles que cuentan historias ♡</h2>

    <p>
      Detalles únicos y personalizados para sorprender
      a las personas que más querés.
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

      <div
  className="card"
  onClick={() => setCategoriaActiva("parejas")}
>
  💝 Parejas
</div>

<div
  className="card"
  onClick={() => setCategoriaActiva("sorpresas")}
>
  🎁 Sorpresas
</div>

<div
  className="card"
  onClick={() => setCategoriaActiva("peluches")}
>
  🧸 Peluches
</div>

<div
  className="card"
  onClick={() => setCategoriaActiva("ramos")}
>
  🌸 Ramos
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
  onClick={() => setCarrito(carrito + 1)}
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