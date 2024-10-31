import { Metadata } from 'next';
import FluidSection from '@/components/Post/FluidSection';
import TitleSection from '@/components/common/TitleSection';
import Posts from '@/components/Post/Posts';
import ScrollToTopBtn from '../components/common/ScrollToTopBtn';

export const metadata: Metadata = {
  title: 'klog - Dev log',
  description: '개인 기술 블로그 입니다.',
  keywords: ['klog', 'blog', 'tech', 'hkound'],
  openGraph: {
    title: 'klog - Dev log',
    description: '개인 기술 블로그 입니다.',
    images: ['/images/thumbnail.jpg'],
  },
};

const Home = () => {
  return (
    <main>
      <TitleSection title="Welcome My Tech-Log" />
      <FluidSection>
        <Posts />
      </FluidSection>
      <ScrollToTopBtn />
    </main>
  );
};

export default Home;
