
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedJobs from '@/components/FeaturedJobs';
import FeaturedFreelancers from '@/components/FeaturedFreelancers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedJobs />
      <FeaturedFreelancers />
      <Footer />
    </div>
  );
};

export default Index;
