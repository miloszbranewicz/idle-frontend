import React from "react";
import { Link } from "react-router-dom";
import { endpoint } from "../utils/enpoint";
import { SimpleGrid, Box, Skeleton } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const { loading, error, data } = useFetch(
    endpoint +'/heroes'
  );
  if (loading) return <Skeleton height="70px" />;

  if (error) return <p>Error :( </p>;
  console.log(data);
  return (
    <SimpleGrid minChildWidth="75px" spacing="4px">
      {data.map((hero) => (
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
