import Posts from '@/components/Post/Posts';
import FluidSection from '@/components/Post/FluidSection';
import SectionTitle from '@/components/Post/SectionTitle';
import { Metadata } from 'next';

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
      <SectionTitle title="Welcome My Tech-Log" />

      <FluidSection>
        <Posts />
      </FluidSection>
    </main>
  );
};

export default Home;
