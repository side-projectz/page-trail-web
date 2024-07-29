import Balancer from "react-wrap-balancer";
import ScreenShot from "/public/screen-shot.jpeg";
// Local component imports
import { Section, Container } from "@/components/ui/craft";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <Section>
      <Container className="mx-auto mt-16 md:max-w-5xl">
        <div>
          <Badge
            className="mb-4 w-fit rounded-full px-4 py-1 text-xs tracking-widest"
            variant={"outline"}
          >
            Currently in development
          </Badge>

          <h1 className="mb-8 text-6xl font-medium leading-snug md:font-medium md:leading-tight lg:text-7xl">
            <Balancer>Learn your online behavior</Balancer>
          </h1>
          <h3 className="text-2xl font-light leading-10 tracking-wide text-muted-foreground">
            <Balancer>
              For digital explorers and productivity enthusiasts, helps you
              understand your online habits and maximize your productivity.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[720px] md:rounded-xl">
            <Image
              className="h-full w-full overflow-hidden object-cover"
              src={ScreenShot}
              width={1920}
              height={1920}
              placeholder="blur"
              alt={""}
            />
          </div>

          <Button variant={"outline"}>Sign up for the Beta</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
