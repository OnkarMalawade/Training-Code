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
                            <Link to="/">Home</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/products">Products</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/carts">Carts</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
};

export default Navbar;
