import { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Flex, Icon, Spinner, Text } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
import { getUsers, useUsers } from '../../services/hooks/useUsers';
import { GetServerSideProps } from 'next';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

type UserListProps = {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(currentPage, {
    initialData: users,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" px="6" mx="auto" my="6" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading>
              Usuários

              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
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
            <Table data={data.users} />
          )}
          { !isLoading && (
            <Pagination
              totalCountOfRegisters={data.totalCount}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users } = await getUsers(1);

  return {
    props: {
      users,
    }
  }
}