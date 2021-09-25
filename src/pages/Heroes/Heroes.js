import React from "react";
import { endpoint } from "../../utils/enpoint";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Factions from "../../components/Factions";

export default function Listing() {
  const { loading, error, data } = useFetch(endpoint + "/heroes");
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :( </p>;
  return (
    <div>
      <Factions />
      <div>
        {data.map((hero) => (
          <Link key={hero.id} to={`/heroes/${hero.id}`}>
            <div>
              <img
                src={hero.hero_image.url}
                alt={hero.hero_image.name}
                width={48}
                height={48}
              ></img>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
