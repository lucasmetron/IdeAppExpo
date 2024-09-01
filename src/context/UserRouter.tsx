import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

interface RouterProps {
  key: string
  name: string
  params: unknown
  allAboutNavigation: unknown
}

interface UserRouterContextType {
  routerData: RouterProps
  setRouterData: Dispatch<SetStateAction<RouterProps>>
}

const initialState: RouterProps = {
  key: '',
  name: '',
  params: undefined,
  allAboutNavigation: undefined
}

const UserRouterContext = createContext<UserRouterContextType>({
  routerData: initialState,
  setRouterData: () => {}
})

interface ContextProps {
  children: ReactNode
}

export function UserRouterProvider({ children }: ContextProps) {
  const [routerData, setRouterData] = useState<RouterProps>(initialState)

  return (
    <UserRouterContext.Provider value={{ routerData, setRouterData }}>
      {children}
    </UserRouterContext.Provider>
  )
}

export default UserRouterContext
