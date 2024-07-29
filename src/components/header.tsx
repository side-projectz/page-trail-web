import { Container } from "@/components/ui/craft";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggler";
import Link from "next/link";

export default function Header() {
  return (
      <header className="fixed w-full z-10 border-b-[1px] bg-inherit">
        <Container className="mx-auto py-4 sm:p-4 md:max-w-5xl">
          <div className="flex justify-between">
            <h1 className="font-medium leading-10 tracking-wider text-2xl">PageTrail</h1>
            <nav className="flex items-center gap-4">
              <ModeToggle />
              <Button asChild variant={"default"}>
                <Link href={"https://app-pagetrail.vercel.app"} target="_top">
                Get started
                </Link>
              </Button>
            </nav>
          </div>
        </Container>
      </header>
  );
}
