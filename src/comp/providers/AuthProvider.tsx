import { createContext, useEffect, useMemo } from "react";
import React, {useState} from "react";
import { IUser, TypeSetState } from "../../types";
import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

import { useHistory } from "react-router-dom";

interface IContext{
  user:IUser | null
  setUser:TypeSetState<IUser | null>
  ga: Auth
  db:Firestore
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider:React.FC = ({children}) => {

  const [user, setUser] = useState<IUser | null>(null)
  const ga = getAuth()
  const db = getFirestore()
  useEffect(() => {
    const unListen = onAuthStateChanged(ga, authUser => {
      if(authUser)
        setUser(
          {
            _id: authUser.uid,
            name: authUser.displayName || '',
          }
      )
      else setUser(null)
    })
    return () => {
      unListen()
    }
  })
  const values = useMemo(() => ({
    db,
    user,
    setUser,
    ga
  }), [user, ga, db])

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}