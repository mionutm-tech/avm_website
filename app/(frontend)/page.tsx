import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Impact } from "@/components/site/Impact";
import { Partners } from "@/components/site/Partners";
import { Members } from "@/components/site/Members";
import { News } from "@/components/site/News";
import { Join } from "@/components/site/Join";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { fetchSiteContent } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await fetchSiteContent();

  return (
    <>
      <Navbar />
      <main>
        <Hero hero={data.hero} org={data.org} />
        <About about={data.about} />
        <Projects projects={data.projects} />
        <Impact impact={data.impact} />
        <Partners cities={data.cities} partners={data.partners} />
        <Members members={data.members} />
        <News news={data.news} />
        <Join tiers={data.tiers} />
        <Contact contact={data.contact} org={data.org} />
      </main>
      <Footer />
    </>
  );
}
