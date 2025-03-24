import Header from "@/components/Header"

import Splash from "@/pages/main/screens/Splash"
import AboutMe from "@/pages/main/screens/AboutMe"
import Collection from "@/pages/main/screens/Collection"
import Yarn from "@/pages/main/screens/Yarn"

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
