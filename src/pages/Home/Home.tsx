
import Content from "../../components/common/sections/content/content";
import Header from "../../components/layouts/header/header";
import Banner from "../../components/common/banner/Banner";
import Skill from "../../components/common/sections/skill/skill";
import Groups from "../../components/common/sections/groups/groups";
import Resources from "../../components/common/sections/resources/resources";
import Footer from "../../components/layouts/footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Skill />
      <Groups />
      <Resources />
      <Footer />
    </>
  );
};

export default Home;
