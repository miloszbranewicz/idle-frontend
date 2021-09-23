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
    <SimpleGrid minChildWidth="75px" spacing="4px">
      {loading ? (
        <Skeleton />
      ) : (
        data.map((hero) => (
          <Link key={hero.id} to={`/heroes/${hero.id}`}>
            <Box>
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
  );
}
