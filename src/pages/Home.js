import React from "react";
import { Link } from "react-router-dom";
import { endpoint } from "../utils/enpoint";
import { useQuery, gql } from "@apollo/client";
import { SimpleGrid, Box, Skeleton } from "@chakra-ui/react";

const HEROES = gql`
  query GetHeroes {
    heroes {
      id
      hero_name
      hero_image {
        url
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(HEROES);
  if (loading) return <Skeleton height="70px" />;

  if (error) return <p>Error :( </p>;
  return (
    <SimpleGrid minChildWidth="75px" spacing="4px">
      {data.heroes.map((hero) => (
        <Link to={`/hero/${hero.id}`}>
          <Box key={hero.id}>
            <img
              src={endpoint + hero.hero_image.url}
              alt={hero.hero_image.name}
              width={72}
              height={72}
            ></img>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
}
