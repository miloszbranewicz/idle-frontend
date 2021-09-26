import React from "react";
import { useParams } from "react-router-dom";
import Factions from "../../components/Factions/Factions";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
const FACTION_HEROES = gql`
  query faction($id: ID!) {
    faction(id: $id) {
      id
      faction_name
      heroes {
        id
        hero_name
        hero_image {
          name
          url
        }
      }
    }
  }
`;
export default function Faction() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FACTION_HEROES, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data);
  return (
    <section>
      <Factions />
      <h1>{data.faction.faction_name}</h1>
      <article>
        {data.faction.heroes.map((hero) => (
          <Link key={hero.id} to={`/heroes/${hero.id}`}>
            <img
              src={hero.hero_image.url}
              height="48"
              width="48"
              alt={hero.hero_image.name}
            />
          </Link>
        ))}
      </article>
    </section>
  );
}
