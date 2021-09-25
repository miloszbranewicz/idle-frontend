import { endpoint } from "../../utils/enpoint";
import { useFetch } from "../../hooks/useFetch";
import { IoFlame } from "react-icons/io5";

export default function Home() {
  const { loading, error, data } = useFetch(endpoint + "/heroes");
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :( </p>;
  console.log(data);
  return (
    <div>
      <h1>
        {/* fs='42px  #F24E1E 24px */}
        Idle Heroes Strategies, Tips & Info
      </h1>
      <h2>
        <IoFlame className="flame-icon" />
        Hot Idle Articles
      </h2>
    </div>
  );
}
