import Navbar from "../../components/NavBar/Navbar";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  );
}

export default Home;
