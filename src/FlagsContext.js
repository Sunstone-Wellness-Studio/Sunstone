import { createContext, useContext, useEffect, useState } from "react";
// import flags from "./flags.json";

// Create Context
export const FlagContext = createContext();

// // Create a custom hook to access the context
// export const useFlags = () => {
//   return useContext(FlagContext);
// };

// Flag component
export const FlagsProvider = ({ children }) => {
  const [flags, setFlags] = useState({});

  useEffect(() => {
    // Fetch flags from your configuration source (e.g., API or local file)
    const fetchFlags = async () => {
      // Example using fetch:
      try{
      const response = await fetch("/flags.json")
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const text = await response.text();
    try {
      const data = JSON.parse(text);
      console.log("flags data", data);
      setFlags(data);
    } catch (jsonError) {
      console.error("Failed to parse JSON:", jsonError);
      console.error("Response text:", text);
    }
    } catch (error){
        console.error("Failed to fetch flags:", error)
    }
    }
    fetchFlags();
  }, []);

  return(
    <FlagContext.Provider value={flags}>
        {children}
    </FlagContext.Provider>
    )
};
