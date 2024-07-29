import { Space_Grotesk } from "next/font/google";
import "@/style/globals.css";
import { Layout } from "@/components/ui/craft";
import CustomProvider from "@/components/providers";


const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Page Trail",
  description:
    "For digital explorers and productivity enthusiasts, helps you understand your online behavior and maximize your productivity.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <body className={`${spaceGrotesk.className} relative`}>
        <CustomProvider>
          {children}
        </CustomProvider>
      </body>
    </Layout>
  );
}
