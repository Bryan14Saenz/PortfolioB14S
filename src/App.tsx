// Import For React
import { lazy, Suspense } from "react";
// Import For React Router DOM
import { Route, Routes } from "react-router-dom";
// Import For Routes Page
import HomePage from "./routes/homePage";
const AboutPage = lazy(() => import("./routes/aboutPage"));
// App Component
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}

// Export For App
export default App;
