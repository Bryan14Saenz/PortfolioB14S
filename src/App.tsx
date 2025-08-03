// Import For React
import { Suspense } from "react";
// Import For React Router DOM
import { Route, Routes } from "react-router-dom";
// Import For Routes Page
import HomePage from "./routes/homePage";

// App Component
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

// Export For App
export default App;
