import { endpoint } from "../utils/enpoint";
import { Container, Skeleton } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { Heading } from "@chakra-ui/layout";
import { IoFlame } from "react-icons/io5";

export default function Home() {
  const { loading, error, data } = useFetch(endpoint + "/heroes");
  if (loading) return <Skeleton height="70px" />;

  if (error) return <p>Error :( </p>;
  console.log(data);
  return (
    <Container textAlign="center" maxW="container.lg" mt="3rem">
      <Heading as="h1" fontSize="42px">
        Idle Heroes Strategies, Tips & Info
      </Heading>
      <Heading mt="1.5rem" as="h2" fontSize="24px" color="#F24E1E" display='flex' alignItems='center'justifyContent='center' >
        <IoFlame className='flame-icon'/>
        Hot Idle Articles
      </Heading>
    </Container>
  );
}
