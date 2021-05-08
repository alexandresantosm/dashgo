import Link from 'next/link';
import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
import { useEffect } from 'react';

export default function UserList() {
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" px="6" mx="auto" my="6" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading>Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} size="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}