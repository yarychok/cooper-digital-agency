import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Portfolio } from '@/components/Portfolio'
import { ProjectDetail } from '@/components/Routes/ProjectDetail'
import { Process } from '@/components/Process'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/Form/ContactForm'
import { Faq } from '@/components/Faq'
import { FormProvider } from '@/components/Form/FormContext'
import { projects } from '@/Components/Routes/projects'
import { useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

function App () {

  // FAQ section background change on scroll
  const faqRef = useRef(null);

  useEffect(() => {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                faqRef.current.style.backgroundColor = '#1C1953'
            } else {
                faqRef.current.style.backgroundColor = '#635BFF';
            }
        })
    }, options)

    if (faqRef.current) {
        observer.observe(faqRef.current);
    }

    return () => {
        if (faqRef.current) {
            observer.unobserve(faqRef.current);
        }
    }
  }, []);

  return (
    <FormProvider>
      <Navbar />
      <Hero />
      <Features />
      <Routes>
        <Route path='/*' element={<Portfolio />} />
        {projects.map((project) => (
          <Route 
              key={project.id}
              path={`/project/${project.id}`}
              render={() => <ProjectDetail project={project} />}
          />
        ))}
      </Routes>
      <Process />
      <Faq ref={faqRef} />
      <Footer />
      <ContactForm />
    </FormProvider>
  )
}

export default App
