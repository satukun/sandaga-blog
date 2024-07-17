import styles from "./Home.module.css";
import HeroSection from "./component/Home/HeroSection";
import Blog from "./component/Blog/Blog";
import ProfileDetails from "./component/Profile/ProfileDetails";
import ProjectList from "./component/Projects/ProjectList";

export default async function Home() {
  return (
    <main className={`${styles.main}`}>
        <HeroSection/>
        <ProfileDetails/>
        <ProjectList/>
        <Blog/>
    </main>
  );
}
