import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center p-8 bg-black text-white w-full">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products">Products</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
