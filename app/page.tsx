import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-amber-50">
      <Header />
      <main className="flex flex-1 flex-col">
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </div>
  );
}
