import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

export const useSidebarContext = () => useContext(SidebarContext);
//@ts-ignore
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
