import Header from "../../components/Header"

import Splash from "./screens/Splash"
import AboutMe from "./screens/AboutMe"
import Catalog from "./screens/Catalog"

const MainPage = () => {
  return (
    <>
      <Header />

      <Splash />
      <AboutMe />
      <Catalog />
    </>
  )
}

export default MainPage
