import { Button, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { Input } from '../../../components/Form/Input';


export default function Form() {
  return (
    <>
      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input name="name" label="Nome completo" />
          <Input name="email" type="email" label="E-mail" />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input name="password" type="password" label="Senha" />
          <Input name="password_confirmation" type="password" label="Confirmação da senha" />
        </SimpleGrid>
      </VStack>

      <Flex mt="8" justify="flex-end">
        <HStack spacing="4">
          <Button colorScheme="whiteAlpha">Cancelar</Button>
          <Button colorScheme="pink">Salvar</Button>
        </HStack>
      </Flex>
    </>
  );
}