import axios from "axios";
// import "./App.css";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";

// export default function Layout({ children }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }

// import { Sidebar } from "lucide-react";
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// Menu items.
// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ];

function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Assignment-UI</h1>

      <div className="grid md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="">
            <Card>
              <CardHeader>
                <img
                  src={product.image}
                  style={{ height: "200px", width: "200px" }}
                  alt=""
                />

                <Link to={`/products/${product.id}`}>
                  <CardTitle>{product.title}</CardTitle>
                </Link>
                <CardDescription>
                  {product.description.slice(0, 60)}...
                </CardDescription>
              </CardHeader>
              <CardContent>
                {product.category} | {product.rating.rate} | ({" "}
                {product.rating.count} )
              </CardContent>
              <CardFooter>
                <p>${product.price}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
