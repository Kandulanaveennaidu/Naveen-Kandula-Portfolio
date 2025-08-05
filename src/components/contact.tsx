import ChatbotPreview from "./chatbot-preview";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Have a project in mind or want to collaborate? Let's talk.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <ContactForm />
          <ChatbotPreview />
        </div>
      </div>
    </section>
  );
}
