import React from "react";
import "../styles/Tile.css";

const Tile = ({
  tile,
  handleClickTile,
  tilesToExchange,
  selectedTile,
  lang,
  rackIndex,
  handleDragStart,
}) => {
  const tileSelected =
    tilesToExchange.filter((item) => item.id === tile.id).length > 0 ||
    selectedTile === tile
      ? true
      : false;

  const getLetter = (tile) => {
    let letter;
    if (lang === "tr" && tile.letter === "i") {
      letter = "İ";
    } else if (lang === "tr" && tile.letter === "ı") {
      letter = "I";
    } else {
      letter = tile.letter.toUpperCase();
    }
    return letter;
  };

  return (
    <div
      className={`tile__wrapper ${tileSelected && "tile__wrapper--selected"} ${
        rackIndex !== undefined && "tile__wrapper--rack"
      }`}
      onClick={() => handleClickTile(tile)}
      draggable
      id={tile.id}
      data-origin="rack"
      data-index={rackIndex}
      onDragStart={handleDragStart}
    >
      <span className="tile__letter">{getLetter(tile)}</span>
      <span className="tile__points">{tile.points}</span>
    </div>
  );
};

export default Tile;
