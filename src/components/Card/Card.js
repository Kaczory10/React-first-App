import { useDispatch } from "react-redux";
import styles from "./Card.module.scss";
import { toggleCardFavorite } from "../../redux/store";
import clsx from "clsx";

const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.card}>
      <span>{props.title}</span>
      <button
        className={styles.favoriteButton}
        onClick={() => dispatch(toggleCardFavorite(props.id))}
      >
        <i className={clsx("fa fa-star-o", props.isFavorite && styles.favoriteIcon)}></i>
      </button>
    </li>
  );
};

export default Card;
