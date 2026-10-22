function CategoriaCard({
  emoji,
  texto,
  categoria,
  categoriaActiva,
  setCategoriaActiva,
}) {
  return (
    <div
      className={`card ${
        categoriaActiva === categoria
          ? "activa"
          : ""
      }`}
      onClick={() =>
        setCategoriaActiva(categoria)
      }
    >
      <span>{emoji}</span>
      <span>{texto}</span>
    </div>
  );
}

export default CategoriaCard;