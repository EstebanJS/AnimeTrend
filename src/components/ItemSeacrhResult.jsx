import React from "react";

const ItemSearchList = ({anime}) => {
  return (
    <li>
      <div className="list_results__item">
        <img
          src={anime.attributes.posterImage.tiny}
          alt={anime.attributes.canonicalTitle}
        />
        <div className="list_results__item__label">
          <p>{anime.attributes.canonicalTitle}</p>
          <span>{anime.attributes.titles.ja_jp}</span>
        </div>
      </div>
    </li>
  );
};

const ItemSeacrhResult = React.memo(ItemSearchList)

export default ItemSeacrhResult;
