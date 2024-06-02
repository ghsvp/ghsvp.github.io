import { Hero } from "@/components";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className="px-6 md:px-18 max-w-xl md:max-w-5xl xl:max-w-[calc(100%-24rem)] mx-auto space-y-12 md:space-y-20">
        <Hero />
        {/* <section className="space-y-4">
          <h1 className="text-primary-1-500">
            About Us
            <Marker title="About Us" icon="info" id="about" />
          </h1>
        </section> */}
        <Footer />
      </main>
    </>
  );
}
