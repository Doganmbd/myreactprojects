import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const res = await axios.get(URL);
    const { drinks } = res.data;
    const newCocktails = drinks.map((item) => {
      const {  idDrink,
         strDrink,
         strAlcoholic,
         strGlass,
         strDrinkThumb } = item;
      return {
        id: idDrink,
        title: strDrink,
        info: strAlcoholic,
        glass: strGlass,
        img: strDrinkThumb,
      };
    });
    setCocktails(newCocktails);
  };
  console.log(cocktails);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };