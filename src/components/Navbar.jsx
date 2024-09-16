import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext' // Make sure this path is correct

import { cn } from "../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/NavigationMenu"

const components = [
  {
    title: "Road Bikes",
    href: "/bikes/road",
    description: "High-performance bikes for speed and endurance on paved roads.",
  },
  {
    title: "Mountain Bikes",
    href: "/bikes/mountain",
    description: "Rugged bikes designed for off-road cycling on rough terrain.",
  },
  {
    title: "Hybrid Bikes",
    href: "/bikes/hybrid",
    description: "Versatile bikes that combine features of road and mountain bikes.",
  },
]

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 bg-black ${
      scrolled ? 'bg-opacity-80' : 'bg-opacity-100'
    }`}>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-light tracking-wider">
          SERENITY SPOKES
        </Link>
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-white bg-transparent hover:bg-white/10")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10">Bikes</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10">Equipment</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/equipment/helmets" title="Helmets">
                      Protect your head with our range of cycling helmets
                    </ListItem>
                    <ListItem href="/equipment/lights" title="Lights">
                      Stay visible with our selection of bike lights
                    </ListItem>
                    <ListItem href="/equipment/locks" title="Locks">
                      Secure your bike with our high-quality locks
                    </ListItem>
                    <ListItem href="/equipment/accessories" title="Accessories">
                      Enhance your ride with our cycling accessories
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-white bg-transparent hover:bg-white/10")}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/shop" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-white bg-transparent hover:bg-white/10")}>
                    Shop
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/cart" className="text-white text-xl relative ml-6">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}