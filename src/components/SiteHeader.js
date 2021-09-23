import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";

export default function SiteHeader() {
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
          <Link to="/">Home</Link>
          <Link to="/heroes">Heroes</Link>
          <Link to="/items">Items</Link>
          <Link to="/buildings">Buildings</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/beginner-tips">Beginner Tips</Link>
        </HStack>
      </Box>
    </Box>
  );
}
