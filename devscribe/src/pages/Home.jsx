import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";
import BlogPreviewList from "../components/BlogPreviewList";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { profile, login, logout } = useAuth();

  return (
    <div>
          <HeroSection />
          <FeatureGrid />
          <BlogPreviewList />
    </div>
  );
};

export default Home;
