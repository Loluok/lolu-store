function Carrito({
  carrito,
  setCarrito,
  observacion,
  setObservacion,
}) {
  return (
    <div className="carrito-panel">

<div className="acciones-carrito">

  <button
    className="vaciar-carrito"
    onClick={() => {
      setCarrito([]);
      setObservacion("");
    }}
  >
    Vaciar
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

      </div>

    </div>

  ))

)}

    </div>
  );
}

export default Carrito;