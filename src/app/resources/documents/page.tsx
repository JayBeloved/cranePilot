import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DocumentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">
        <h1 className="text-4xl font-bold">Documents</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Browse our collection of documents.
        </p>
        <div className="mt-8">
          <p>Documents content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
