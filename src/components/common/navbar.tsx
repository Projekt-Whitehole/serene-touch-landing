"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ModeToggle } from "./modeToggler";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex backdrop-blur-3xl justify-between border-b-2">
      <div className="container flex justify-between py-4">
        <div className="flex gap-10">
          <div className="flex justify-center align-middle items-center text-base md:text-2xl gap-8">
            <div className="font-bold">
              <span className="md:text-3xl text-xl">⚕️</span>Serene
              <span className="text-blue-400">Touch</span>
            </div>
          </div>
          <div className=" gap-6 hidden md:flex">
            <Button variant={"ghost"} className={cn("font-bold text-base")}>
              Try Now <ArrowUpRight />
            </Button>
            <Button variant={"ghost"} className={cn("font-bold text-base")}>
              <Link to="contact" smooth>
                {" "}
                Contact Us
              </Link>
            </Button>
            <Button variant={"ghost"} className={cn("font-bold text-base")}>
              <Link to="feature" smooth>
                Features
              </Link>
            </Button>
            <Button variant={"ghost"} className={cn("font-bold text-base")}>
              <Link to="faq" smooth>
                Faqs
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:flex md:gap-4 gap-2 ">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
