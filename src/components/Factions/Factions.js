import React from "react";
import useFetch from "../../hooks/useFetch";
import { endpoint } from "../../utils/enpoint";
import { Link } from "react-router-dom";


export default function Factions() {
  const { loading, error, data } = useFetch(
    endpoint + "/factions?_sort=id:ASC"
  );
  if (loading) return <p>Loading ...</p>
  if (error) return <p>{error}</p>;
  console.log(data);
  return (

      <div
      >
        {data.map((faction) => (
          <Link key={faction.id} to={`/faction/${faction.faction_name}`}>
            <img
              src={faction.faction_image.url}
              w="3rem"
              h="3rem"
              alt={faction.name}
            ></img>
          </Link>
        ))}
      </div>
      

  );
}

