import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" px="6" mx="auto" my="6" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading>Usuários</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} size="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}