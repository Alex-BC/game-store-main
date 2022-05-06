import React from "react";
import { useSelector } from "react-redux";
import { GameBuy } from "../../components/game-buy";
import { GameCover } from "../../components/game-cover";
import { GameGenre } from "../../components/game-genre";
import "./game-page.css";

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame); //ідемо в редьюсер глобальний і забераємо

  if (!game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            src={game.video}
            frameborder="0"
            width="90%"
            height="400px"
            title="Youtube Video Player"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">
            Популярні теги(помітки) цього продукту:
          </p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div> //можна виносити в окремий компонент в цій же папці
  );
};
