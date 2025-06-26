import React, { createContext, useContext, useState, ReactNode } from "react";
import { MockUser } from "@/types/user";
import { mockUsers } from "@/lib/mockUsers";

// Define the context shape
interface UserContextType {
  user: MockUser | null;
  setUser: (user: MockUser | null) => void;
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<MockUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
