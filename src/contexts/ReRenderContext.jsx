import { createContext, useState } from 'react';

export const ReRenderContext = createContext();

export default function ReRenderContextProvider({ children }) {
  const [ resetData, setResetData ] = useState(false)

  const reRender = () => setResetData(!resetData)
  // console.log(resetData)

  return (
    <ReRenderContext.Provider value={{ resetData, reRender }} >
      {children}
    </ReRenderContext.Provider>
  );
}
