import { ReactNode } from 'react';
import { Heading as ChakraHeading } from '@chakra-ui/react';

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <ChakraHeading size="lg" fontWeight="normal">{children}</ChakraHeading>
  );
}