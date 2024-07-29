import Balancer from "react-wrap-balancer";
import ScreenShot from "/public/screen-shot.jpeg";
// Local component imports
import { Section, Container } from "@/components/ui/craft";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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

          <h1 className="mb-4 text-4xl font-medium leading-snug md:text-5xl md:font-medium md:leading-tight lg:text-6xl">
            <Balancer>Learn your online behavior</Balancer>
          </h1>
          <h3 className="text-xl font-light leading-8 tracking-wide text-muted-foreground">
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

          <div className="mb-4">
            <Link
              href="https://www.producthunt.com/products/page-trail?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-page&#0045;trail"
              target="_blank"
            >
              <Image
                src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=595895&theme=light"
                alt="Page&#0032;Trail - Understand&#0032;Your&#0032;Browsing&#0032;Habits&#0032;with&#0032;Page&#0032;Trail | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </Link>
          </div>

          <div>
            <Button asChild variant={"default"}>
              <Link href={"https://app-pagetrail.vercel.app/"}>
                Sign up for the Beta
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
