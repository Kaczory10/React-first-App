import { useSelector } from "react-redux";
import Card from "../Card/Card";
import columnStyles from "../Column/Column.module.scss";
import styles from "./Favorite.module.scss";
import { Navigate } from "react-router-dom";
import { getFavoriteCards } from "../../redux/cardsRedux";

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) return <Navigate to="/" />;

  return (
    <section className={styles.favorites}>
      <h2 className={styles.heading}>FAVORITE</h2>
      <article className={columnStyles.column}>
        <ul className={columnStyles.cards}>
          {favoriteCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              id={card.id}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Favorite;
