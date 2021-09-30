import React from "react";
import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
const HERO = gql`
  query hero($id: ID!) {
    hero(id: $id) {
      id
      hero_name
      hero_image {
        url
        name
      }
      faction {
        faction_name
        faction_image {
          url
          name
        }
      }
    }
  }
`;
export default function Hero() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(HERO, { variables: { id } });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const hero = {...data.hero}
  console.log(hero);
  return <section>
    <h1>{hero.hero_name}</h1>
    <img src={hero.hero_image.url} width={150} height={150} alt={hero.hero_image.name}/>
  </section>;
}
