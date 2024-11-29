import React, { PropsWithChildren, ReactElement, createContext, useContext } from 'react';

interface SidebarContext {
  isSidebarOpen: boolean;
}

const SidebarContextDefaultValue: SidebarContext = {
  isSidebarOpen: true, // Siempre visible
};

const SidebarContext = createContext(SidebarContextDefaultValue);

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  return (
    <SidebarContext.Provider value={SidebarContextDefaultValue}>
      {children}
    </SidebarContext.Provider>
  );
};
