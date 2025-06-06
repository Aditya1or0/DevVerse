import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";
import { SplashScreen } from "./pages/SplashScreen";

const queryClient = new QueryClient();

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <QueryClientProvider client={queryClient}>
        <SplashScreen onComplete={handleSplashComplete} />
        <div
          className={`transition-opacity duration-600 ${
            showSplash ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
          }`}
        >
          <BrowserRouter>
            <ThemeProvider defaultTheme="dark">
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/contact" element={<ContactUs />} />
                </Routes>
              </Layout>
            </ThemeProvider>
          </BrowserRouter>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
