import '@styles/global.css';
import Header from '@/components/header';
import Stack from '@/components/stack';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Projects from '@/components/projects';
import Contact from '@/components/contact';


const Home = () => {
  return (
    <section className='w-full flex flex-col items-center'>
        
        <Header />
        <Stack />
        <Projects />
        <Contact />

    </section>
  ) 
}

export default Home; 