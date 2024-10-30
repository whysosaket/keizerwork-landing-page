"use client";

import React from "react";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <div className="max-w-screen relative overflow-hidden">
         <div className="absolute pointer-events-none inset-0 z-50 flex items-center justify-center dark:bg-black bg-[#1A1A1A] bg-dot [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="perspective-1000">
        <div className="transform p-4 scale-[1.5] relative left-[35rem] rotate-x-[40deg] rotate-y-[20deg] -rotate-z-[30deg]">
          <div className="flex space-x-4">
            <div>
              <motion.img
              initial={{ opacity: 0, x: 10, y: -50, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              src={products[5].thumbnail} alt="p1" className="rounded-sm animate-unblur2 [animation-delay:_1.25s]" />
            </div>
            <div>
              <motion.img
               initial={{ opacity: 0, x: 30, y: -50, scale: 1.2}}
               animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
               transition={{ duration: 0.3, delay: 1.4 }}
              src={products[1].thumbnail} alt="p2" className="rounded-sm animate-unblur2 [animation-delay:_1.45s]" />
            </div>
            <div>
              <motion.img
               initial={{ opacity: 0, x: 50, y: -50, scale: 1.2}}
               animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
               transition={{ duration: 0.3, delay: 1.6 }}
              src={products[2].thumbnail} alt="p3" className="rounded-sm animate-unblur2 [animation-delay:_1.65s]" />
            </div>
            <div>
              <motion.img
               initial={{ opacity: 0, x: 70, y: -50, scale: 1.2}}
               animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
               transition={{ duration: 0.3, delay: 1.8 }}
              src={products[3].thumbnail} alt="p3" className="rounded-sm animate-unblur2 [animation-delay:_1.85s]" />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div>
              <motion.img
               initial={{ opacity: 0, x: 10, y: 50, scale: 1.2}}
               animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
               transition={{ duration: 0.3, delay: 2 }}
              src={products[4].thumbnail} alt="p1" className="rounded-sm animate-unblur2 [animation-delay:_2.05s]" />
            </div>
            <div>
              <motion.img
               initial={{ opacity: 0, x: 40, y: 50, scale: 1.2}}
               animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
               transition={{ duration: 0.3, delay: 1.8 }}
              src={products[5].thumbnail} alt="p2" className="rounded-sm animate-unblur2 [animation-delay:_1.85s]" />
            </div>
            <div>
              <motion.img
               initial={{ opacity: 0, x: 70, y: 50, scale: 1.2}}
               animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
               transition={{ duration: 0.3, delay: 1.6 }}
                src={products[6].thumbnail} alt="p3" className="rounded-sm animate-unblur2 [animation-delay:_1.65s]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
  
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
  
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
  
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];