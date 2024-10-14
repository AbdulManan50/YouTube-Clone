import React, { createContext, useEffect, useState } from "react";
import { fetchdata } from "../Utils/Rapidapi";
import { useContext } from "react";

export const Authcontext = createContext();

export default function Authprovider({ children }) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    setloading(true);
    fetchdata(`search/?q=${query}`).then(({contents}) => {
      setdata(contents);
      setloading(false);
    });
  };

  return (
    <Authcontext.Provider value={{ loading, data, value, setvalue }}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth = () => useContext(Authcontext);
