import React from "react";
import { Link } from "react-router-dom";
import { endpoint } from "../utils/enpoint";
import { Skeleton } from "@chakra-ui/skeleton";
import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Center, Spacer } from "@chakra-ui/layout";
import useFetch from "../hooks/useFetch";

export default function SiteHeader() {
  const { loading, error, data } = useFetch(
    "https://heroes-backend.herokuapp.com/factions"
  );
  if (loading) return <Skeleton height="70px" />;

  if (error) return <p>Error :( </p>;
  return (
    <Box mb="5">
      <Box p="4" borderBottom="1px" borderColor="gray.200">
        <Link to="/">
          <ChakraLink>Home</ChakraLink>
        </Link>
      </Box>
      <Center>
        <Flex justify="space-between" maxWidth="container.md" my="5">
          {data.map((faction) => (
            <Link key={faction.id} to={`/faction/${faction.id}`}>
              <Box px="2">
                <img
                  src={endpoint + faction.faction_image.url}
                  alt={faction.faction_image.url}
                  width={35}
                  height={35}
                />
              </Box>
              <Spacer />
            </Link>
          ))}
        </Flex>
      </Center>
    </Box>
  );
}
