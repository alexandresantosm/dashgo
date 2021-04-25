import { Flex, SimpleGrid } from '@chakra-ui/react';

import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import Chart from './Chart';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" px="6" mx="auto" my="6" maxWidth={1480}>
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Chart>Inscritos da semana</Chart>
          <Chart>Taxa de abertura</Chart>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}