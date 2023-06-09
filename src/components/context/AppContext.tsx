import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"


interface IModalState{
    isCreateAssetModalOpen?: boolean;
    isCreateLoanModalOpen?: boolean;
}

interface ISetModalState{
    modalState?: IModalState,
    setModalState?: Dispatch<SetStateAction<IModalState>>
}


export const AppContext = createContext<ISetModalState>({});

// Define a parent component
export function AppContextProvider({children}:any) {
  const [modalState, setModalState] = useState<IModalState>({
    isCreateAssetModalOpen: false,
    isCreateLoanModalOpen: false
  });

  return (
    <AppContext.Provider value={{ modalState, setModalState }}>
      {children}
    </AppContext.Provider>
  );
}