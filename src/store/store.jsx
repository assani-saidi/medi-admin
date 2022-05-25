import React, { createContext, useState } from "react";

export const Store = createContext();

export default function StoreProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  return (
    <Store.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </Store.Provider>
  );
}
