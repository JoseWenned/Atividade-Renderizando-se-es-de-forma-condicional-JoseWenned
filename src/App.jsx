import { useState } from "react"
import { LoginSection } from "./components/LoginSection"
import { RestrictedSection } from "./components/RestrictedSection"

export const App = () => {

  const [ isLogin, setIsLogin ] = useState(false);
 
  return (
    <>
    {isLogin ? <RestrictedSection setIsLogin={setIsLogin} /> : <LoginSection setIsLogin={setIsLogin} />}
    </>
  )

}

