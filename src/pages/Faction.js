import { useQuery, gql } from "@apollo/client";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";
import { useParams } from "react-router";
import { SimpleGrid, Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { endpoint } from "../utils/enpoint";

const FACTION = gql`
  query getFactions($id: ID!) {
    faction(id: $id) {
      id
      heroes {
        id
        hero_name
        hero_image {
          url
        }
      }
    }
  }
`;

export default function Faction() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FACTION, {
    variables: {
      id: id,
    },
  });
  if (loading) return <Skeleton height="70px" />;

  if (error) return <p>Error :( </p>;

  return (
    <SimpleGrid minChildWidth="75px" spacing="4px">
      {data.faction.heroes.map((hero) => (
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
