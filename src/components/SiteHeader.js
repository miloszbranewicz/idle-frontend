import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import ActiveLink from "./ActiveLink";
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
          <ActiveLink to="/" activeOnlyWhenExact={true} label="Home" />
          <ActiveLink to="/heroes" activeOnlyWhenExact={true} label="Heroes"/>
          <ActiveLink to="/items" activeOnlyWhenExact={true} label="Items"/>
          <ActiveLink to="/buildings" activeOnlyWhenExact={true} label="Buildings"/>
          <ActiveLink to="/Activities" activeOnlyWhenExact={true} label="Activities"/>
          <ActiveLink to="/beginner-tips" activeOnlyWhenExact={true} label="Beginner Tips"/>
        </HStack>
      </Box>
    </Box>
  );
}
