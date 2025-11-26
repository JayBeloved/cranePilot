import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">
        <h1 className="text-4xl font-bold">Videos</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Watch our tutorials and webinars.
        </p>
        <div className="mt-8">
          <p>Video content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
