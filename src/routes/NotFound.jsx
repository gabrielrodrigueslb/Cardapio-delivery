import { Link } from "react-router-dom";
import styles from "../assets/css/notFound.module.css"

export default function NotFound() {
  return (
    <div className={styles.erromensage}>
      <h1>Not found <span>404</span></h1>
      <p>Sorry, the page you are looking for could not be found.</p>
        <Link className={styles.link404}to={'/'}>Retornar para o site</Link>
    </div>
  );
}
