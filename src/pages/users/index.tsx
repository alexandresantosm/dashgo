import Link from 'next/link';
import { Box, Button, Flex, Icon, Spinner, Text } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { useQuery } from 'react-query';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
      }
    });

    return users;
  }, {
    staleTime: 1000 * 5, // 5 segundos
  });

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

          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <Table data={data} />
          )}

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}