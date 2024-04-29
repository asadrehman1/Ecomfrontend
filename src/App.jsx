import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import TradeSell from "./components/TradeSell";
import Watches from "./components/Watches";
import { CartProvider } from "./context/cartContext";
import SingleWatch from "./components/SingleWatch";
import Cart from "./components/Cart";
import Jewelery from "./components/Jewelery";
import SingleJewelry from "./components/SingleJewelery";
import SellTradeForm from "./components/TradeSellForm";
import Payment from "./components/Payment";
import LoginForm from "./components/User/Login";
import SignupForm from "./components/User/SignUp";
import Profile from "./components/User/Profile";
import EditProfile from "./components/User/EditProfile";
import ChangePassword from "./components/User/ChangePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/trade-sell" element={<TradeSell />} />
            <Route path="/watches/:brand" element={<Watches />} />
            <Route path="/watches/:brand/:id" element={<SingleWatch />} />
            <Route path="/jewelery/:type" element={<Jewelery />} />
            <Route path="/jewelery/:type/:id" element={<SingleJewelry />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/selltrade" element={<SellTradeForm />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
