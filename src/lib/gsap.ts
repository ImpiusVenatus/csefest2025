import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

export function gsapSetup() {
    if (registered) return gsap;
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, CustomEase);
        // Pleasant default ease
        CustomEase.create("smooth", "M0,0 C0.2,0.0 0.0,1 1,1");
        registered = true;
    }
    return gsap;
}

export { gsap, ScrollTrigger };
