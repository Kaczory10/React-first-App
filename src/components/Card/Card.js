import { useDispatch } from "react-redux";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { toggleCardFavorite, removeCard } from "../../redux/cardsRedux";

const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.card}>
      <span>{props.title}</span>
      <div>
        <button
          className={styles.actionButton}
          onClick={() => dispatch(toggleCardFavorite(props.id))}
        >
          <i className={clsx("fa fa-star-o", props.isFavorite && styles.favoriteIcon)}></i>
        </button>
        <button
          className={styles.actionButton}
          onClick={() => dispatch(removeCard(props.id))}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
