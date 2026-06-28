import { createRoot } from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./landing-page/Home/HomePage.jsx";
import PricingPage from "./landing-page/Pricing/PricingPage.jsx";
import ProductPage from "./landing-page/Products/ProductPage.jsx";
import AboutPage from "./landing-page/About/AboutPage.jsx";
import SupportPage from "./landing-page/Support/SupportPage.jsx";

import Navbar from "./landing-page/Navbar.jsx";
import Footer from "./landing-page/Footer.jsx";

import Login from "./landing-page/Login/Login.jsx";
import Signup from "./landing-page/SignUp/Signup.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";
import NotFound from "./landing-page/NotFound.jsx";

createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>

    <Navbar />

    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Protected Routes */}
      <Route
        path="/pricing"
        element={
          <ProtectedRoute>
            <PricingPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <AboutPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/support"
        element={
          <ProtectedRoute>
            <SupportPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

    <Footer />

  </BrowserRouter>
);