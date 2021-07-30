import React from "react";
import "@styles/Card.sass";

const Card = ({ data, loading }) => {
  return (
    <div className="card">
      {loading ? (
        <img
          loading="lazy"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          alt="Portada anime"
          width="150"
          height="212.33"
        />
      ) : (
        <img
          loading="lazy"
          src={data.attributes.posterImage.small}
          alt={`Portada de ${data.attributes.titles.en}`}
          width="150"
          height="212.33"
        />
      )}
    </div>
  );
};

export default Card;
