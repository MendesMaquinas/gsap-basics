import { Space_Grotesk } from "next/font/google";
const spaceGrotesc = Space_Grotesk({ subsets: ["latin"] });

import {useLayoutEffect, useRef} from "react"
import gsap from "gsap";

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 2.2,
      }).from(["#title-1","#title-2","#title-3","#title-4"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5
      }).to(["#title-1","#title-2","#title-3","#title-4"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.5,
        onComplete: () => {
          //t1.restart();
        }
      })
    }, comp)

    return () => ctx.revert();
  }, [])

  return (
    <div className={`relative ${spaceGrotesc.className}`} ref={comp}>
      <div id="intro-slider" className="h-screen w-full p-10 bg-gray-50 absolute top-0 left-0 z-10 flex flex-col gap-8 tracking-tighter">
        <h1 id="title-1" className="text-9xl">Programador Full Stack</h1>
        <h1 id="title-2" className="text-9xl">Web</h1>
        <h1 id="title-3" className="text-9xl">Mobile</h1>
        <h1 id="title-4" className="text-9xl">Back End</h1>
      </div>
      <div id="welcome" className="h-screen w-full flex bg-gray-950 justify-center place-items-center">
        <h1 className="text-9xl font-bold text-gray-100">Bem vindo.</h1>
      </div>
    </div>
  );
}
