import React from "react";
import { HStack } from "@chakra-ui/layout";
import useFetch from "../hooks/useFetch";
import { endpoint } from "../utils/enpoint";
import { Skeleton } from "@chakra-ui/skeleton";
import { Link } from "react-router-dom";
import { Img } from "@chakra-ui/image";


export default function Factions() {
  const { loading, error, data } = useFetch(
    endpoint + "/factions?_sort=id:ASC"
  );
  if (loading) return <Skeleton />;
  if (error) return <p>{error}</p>;
  console.log(data);
  return (

      <HStack
        justifyContent="space-between"
        width="30rem"
        m="1rem auto"
        p="1rem"
      >
        {data.map((faction) => (
          <Link key={faction.id} to={`/faction/${faction.faction_name}`}>
            <Img
              src={faction.faction_image.url}
              w="3rem"
              h="3rem"
              alt={faction.name}
            ></Img>
          </Link>
        ))}
      </HStack>
      

  );
}

