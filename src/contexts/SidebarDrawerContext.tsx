import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from "next/router";
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContexData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContexData);

export default function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export  const useSidebarDrawer = () => useContext(SidebarDrawerContext);