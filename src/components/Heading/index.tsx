import { Heading as ChakraHeading } from '@chakra-ui/react';

interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <ChakraHeading size="lg" fontWeight="normal">{children}</ChakraHeading>
  );
}