import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Benefits from "@/components/Benefits";
import Practitioner from "@/components/Practitioner";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import PageMotion from "@/components/motion/PageMotion";

import { client } from "@/sanity/client";
import { homepageQuery } from "@/sanity/queries";

export default async function Home() {
  const homepage = await client.fetch(homepageQuery);

  return (
    <>
      <Sidebar />

      <PageMotion>
        <Hero />
        <Method data={homepage} />
        <Benefits data={homepage} />
        <Practitioner data={homepage} />
        <Booking data={homepage} />
        <Footer />
      </PageMotion>
    </>
  );
}
