// Import For React
import { lazy, Suspense } from "react";
// Import For React Router DOM
import { Route, Routes } from "react-router-dom";
// Import For Context
import { FilterProvider } from "./context/FilterContext";
// Import For Routes Page
import HomePage from "./routes/homePage";
const TechPage = lazy(() => import("./routes/techPage"));
const ProjectsPage = lazy(() => import("./routes/projectsPage"));
const AboutPage = lazy(() => import("./routes/aboutPage"));
const ContactPage = lazy(() => import("./routes/contactPage"));


// App Component
function App() {
  return (
    <Suspense fallback={<div className="mt-10  text-center text-lg font-bold">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/techPage" element={<TechPage />} />
        <Route path="/projectsPage" element={
          <FilterProvider>
            <ProjectsPage />
          </FilterProvider>} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

// Export For App
export default App;
