import React from "react";
import useFetch from "../../hooks/useFetch";
import { endpoint } from "../../utils/enpoint";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function Factions() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    endpoint + "/factions?_sort=id:ASC"
  );

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;
  console.log(id);
  return (
    <div className="flex flex-row max-w-2xl mx-auto justify-between my-5">
      {data.map((faction) => (
        <Link key={faction.id} to={`/faction/${faction.id}`}>
          <img
            className="w-8 sm:w-10"
            src={faction.faction_image.url}
            width="48"
            height="48"
            alt={faction.name}
          ></img>
        </Link>
      ))}
    </div>
  );
}
