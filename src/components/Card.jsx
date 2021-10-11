import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import "@styles/Card.sass";

const CardAnime = ({ data, loading }) => {
  const [openModal, setOpenModal] = React.useState(false);
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
      <div className="details">
        <div className="titles">
          <h2>{data.attributes.canonicalTitle}</h2>
          <span>{data.attributes.titles.ja_jp}</span>
        </div>
        <div className="buttons">
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button>
            <FontAwesomeIcon onClick={() => setOpenModal(true)} icon={faPlay} />
          </button>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${data.attributes.youtubeVideoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </div>
  );
};

const Card = React.memo(CardAnime);

export default Card;
