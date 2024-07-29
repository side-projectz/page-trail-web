import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/ui/craft";

export default function Footer() {
  return (
    <footer className="not-prose border-t">
      <Section>
        <Container className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/">
              <h1 className="text-2xl font-medium leading-10 tracking-wide ">
                PageTrail
              </h1>
            </Link>
            <p>
              <Balancer>
                We built Page Trail to help you understand your own browsing
                behavior.
              </Balancer>
            </p>
            {/* <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div> */}
            <p className="text-muted-foreground">
              © <a href="https://github.com/brijr/components"> PageTrail </a>.
              All rights reserved. 2024-present.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
