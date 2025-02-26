import type React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppSidebar } from "./components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct";
import GetSingleProduct from "./pages/GetSingleProduct";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <SidebarProvider>
          <div className="flex h-screen">
            <AppSidebar />
            <main className="flex-1 p-4 overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/update-product" element={<UpdateProduct />} />
                <Route path="/delete-product" element={<DeleteProduct />} />
                <Route
                  path="/get-single-product"
                  element={<GetSingleProduct />}
                />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
