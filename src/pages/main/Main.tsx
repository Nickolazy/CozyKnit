import Header from "../../components/Header"

import Splash from "./screens/Splash"
import AboutMe from "./screens/AboutMe"
import Collection from "./screens/Collection"
import Yarn from "./screens/Yarn"

const MainPage = () => {
  return (
    <>
      <Header />

      <Splash />
      <AboutMe />
      <Collection />
      <Yarn />
    </>
  )
}

export default MainPage
