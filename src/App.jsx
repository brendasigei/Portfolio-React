import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ProjectDetail from './ProjectDetails';
import AddProjectPage from './AddProjectPage';
import useProjects from './useproject';
import initialProjects from './initialProject';

// App is the nearest common parent of every component that needs the
// projects or the search term, so that state lives here (via the hook).
export default function App() {
  const { projects, filteredProjects, searchTerm, setSearchTerm, addProject } =
    useProjects(initialProjects);

  // The home page gets filtered data; detail pages need the complete project list.
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                projects={filteredProjects}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
          <Route path="/add" element={<AddProjectPage onAddProject={addProject} />} />
          <Route
            path="*"
            element={
              <section className="container">
                <h1>Page not found</h1>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}