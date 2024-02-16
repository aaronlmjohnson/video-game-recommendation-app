import { createContext, useState } from "react"
export const YearContext = createContext();

const YearContextProvider = ({children})=>{
const CURRENT_YEAR = new Date().getFullYear();
  const FIRST_YEAR = 1972;
  const [year, setYear] = useState(CURRENT_YEAR);

    return (
        <YearContext.Provider
            value={
                {
                    year,
                    setYear,
                    CURRENT_YEAR,
                    FIRST_YEAR
                }
            }
        >
            {children}
        </YearContext.Provider>
    )
}

export default YearContextProvider;



