import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <Header />
      <About/>
      <WorkExperience/>
      {/* Add About + Work Experience sections here */}
    </main>
  );
}
