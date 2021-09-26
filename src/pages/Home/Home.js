import { endpoint } from "../../utils/enpoint";
import { useFetch } from "../../hooks/useFetch";
import { IoFlame } from "react-icons/io5";
import styles from "./home.module.css";
export default function Home() {
  const { loading, error, data } = useFetch(endpoint + "/heroes");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  return (
    <section>
      <h1 className="mainHeader">
        {/* fs='42px  #F24E1E 24px */}
        Idle Heroes Strategies, Tips & Info
      </h1>
      <h2 className={styles.subheader}>
        <IoFlame className={styles.flameIcon} />
        Hot Idle Articles
      </h2>
    </section>
  );
}
