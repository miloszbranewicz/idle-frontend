import React from "react";
import { endpoint } from "../utils/enpoint";
import useFetch from "../hooks/useFetch";
import { Skeleton } from "@chakra-ui/skeleton";
import { SimpleGrid, Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";


export default function Listing() {
  const { loading, error, data } = useFetch(endpoint + "/heroes");
  if (loading) return <Skeleton height="70px" />;

  if (error) return <p>Error :( </p>;
  console.log(data);
  return (
    <>
      <SimpleGrid minChildWidth="75px" spacing="4px">
        {loading ? (
          <Skeleton />
        ) : (
          data.map((hero) => (
            <Link to={`/heroes/${hero.id}`}>
              <Box key={hero.id}>
                <img
                  src={hero.hero_image.url}
                  alt={hero.hero_image.name}
                  width={48}
                  height={48}
                ></img>
              </Box>
            </Link>
          ))
        )}
      </SimpleGrid>
    </>
  );
}
{
  /* <HeroAvatar
        factionImgLink={data.hero.faction.faction_image.url}
        factionAltText={data.hero.faction.faction_image.url}
        factionImgWidth={30}
        factionImgHeight={30}
        heroName={data.hero.hero_name}
        heroImgLink={data.hero.hero_image.url}
        heroAltText={data.hero.hero_image.name}
        heroImgWidth={128}
        heroImgHeight={128}
      ></HeroAvatar> */
}
