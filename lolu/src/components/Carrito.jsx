function Carrito({
  carrito,
  setCarrito,
  observacion,
  setObservacion,
  total,
  tieneProductos,
  tieneObservacion,
  mensajeWhatsApp,
  setMostrarCarrito,
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
  );
}

export default Carrito;