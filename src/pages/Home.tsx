import { CallToAction } from "@components/global/CallToAction";
import { Features } from "@components/global/Features";
import { Hero } from "@components/global/Hero";

export const Home = () => {
    return (
      <div>
        <Hero />
        <Features />
        <CallToAction />
      </div>
    );
}