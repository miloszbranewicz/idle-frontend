import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@chakra-ui/skeleton";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import useFetch from "../hooks/useFetch";
import { Image } from "@chakra-ui/image";

export default function SiteHeader() {
  const { loading, error, data } = useFetch(
    "https://heroes-backend.herokuapp.com/factions"
  );
  if (loading) return <Skeleton height="70px" />;

  if (error) return <p>Error :( </p>;
  return (
    <Box>
      <Box
        backgroundImage="https://res.cloudinary.com/dofpdamyl/image/upload/v1632423017/image_1_60c3bf94ac.jpg"
        h="250px"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
      <Box background="#151515" fontWeight="700" fontSize="18px" color="white">
        <HStack p="1rem" justify="space-around" maxW="75%" mx="auto">
          <Link to="/">
            <ChakraLink>Home</ChakraLink>
          </Link>
          <Link to="/heroes">
            <ChakraLink>Heroes</ChakraLink>
          </Link>
          <Link to="/items">
            <ChakraLink>Items</ChakraLink>
          </Link>
          <Link to="/buildings">
            <ChakraLink>Buildings</ChakraLink>
          </Link>
          <Link to="/activities">
            <ChakraLink>Activities</ChakraLink>
          </Link>
          <Link to="/beginner-tips">
            <ChakraLink>Beginner Tips</ChakraLink>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}
