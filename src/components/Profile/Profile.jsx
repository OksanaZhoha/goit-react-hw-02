import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.itemValue}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Views</span>
          <span className={css.itemValue}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.itemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
