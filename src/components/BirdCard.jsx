import placeholder from "../assets/placeholder-bird.png";

function BirdCard({ bird }) {
  const imageSrc = bird.image || placeholder;

  return (
    <div
      style={{
        width: "260px",
        height: "380px",
        border: "1px solid #000",
        borderRadius: "8px",
        backgroundColor: "#e5e5e5",
        color: "#000",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "2px 2px 6px #000000",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            height: "2.5rem",
            overflow: "hidden",
            marginBottom: "0.5rem",
          }}
        >
          {bird.title || "Ave Desconocida"}
        </h2>

        <img
          src={imageSrc}
          alt={bird.title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "contain",
            backgroundColor: "#1e1e1e",
            borderRadius: "4px",
            marginBottom: "0.5rem",
          }}
        />

        <p
          style={{
            fontSize: "0.85rem",
            height: "80px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {bird.extract || "Sin descripción disponible."}
        </p>
      </div>

      <a
        href={bird.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "0.5rem",
          fontSize: "0.85rem",
          color: "#0066cc",
          textAlign: "right",
          textDecoration: "none",
        }}
      >
        Leer más →
      </a>
    </div>
  );
}

export default BirdCard;
