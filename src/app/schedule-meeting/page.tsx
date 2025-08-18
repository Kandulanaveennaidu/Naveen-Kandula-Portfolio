import ZoomScheduler from "@/components/zoom-scheduler";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Schedule a Meeting | Kandula Naveen",
  description:
    "Schedule a Zoom meeting with Kandula Naveen to discuss your project requirements.",
};

export default function ScheduleMeetingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">
              Schedule a Meeting
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Let's connect to discuss your requirements and how I can help.
            </p>
          </div>
          <ZoomScheduler />
        </div>
      </main>
      <Footer />
    </div>
  );
}
