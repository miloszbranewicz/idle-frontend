import React from "react";
import { useParams } from "react-router";
import { endpoint } from "../utils/enpoint";
import { useQuery, gql } from "@apollo/client";
import HeroAvatar from "../components/HeroAvatar";

const HERO = gql`
  query GetHero($id: ID!) {
    hero(id: $id) {
      hero_name
      hero_image {
        url
      }
      faction {
        shadow_color
        faction_name
        faction_image {
          url
        }
      }
    }
  }
`;

export default function Listing() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(HERO, {
    variables: {
      id: id,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :( </p>;

  console.log(data);
  return (
    <>
      <HeroAvatar
        factionImgLink={endpoint + data.hero.faction.faction_image.url}
        factionAltText={data.hero.faction.faction_image.url}
        factionImgWidth={30}
        factionImgHeight={30}
        heroName={data.hero.hero_name}
        heroImgLink={endpoint + data.hero.hero_image.url}
        heroAltText={data.hero.hero_image.name}
        heroImgWidth={128}
        heroImgHeight={128}
      ></HeroAvatar>
    </>
  );
}
