function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <div className="producto">

      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <h4>{producto.nombre}</h4>

      <p className="precio">
        {producto.precio}
      </p>

      <button
        onClick={() => agregarAlCarrito(producto)}
      >
        Comprar
      </button>

    </div>
  );
}

export default ProductoCard;