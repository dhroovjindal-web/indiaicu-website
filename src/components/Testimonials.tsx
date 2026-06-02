import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      text: "Ambulance arrived in 12 minutes. Thank you IndiaICU.",
      author: "Rahul M.",
      location: "Delhi",
    },
    {
      text: "ICU transfer from Delhi to Lucknow was smooth and professional.",
      author: "Priya S.",
      location: "",
    },
    {
      text: "The paramedics were trained and calm throughout. Lifesavers.",
      author: "Vikram T.",
      location: "Noida",
    },
    {
      text: "Affordable and fast. Highly recommended.",
      author: "Aarav K.",
      location: "",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Trust & Reliability
          </h2>
          <p className="text-muted-foreground mt-2">What families say about IndiaICU.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-200 mb-4" />
                <p className="text-muted-foreground mb-6 font-medium italic">"{t.text}"</p>
                <div>
                  <p className="text-foreground font-bold">{t.author}</p>
                  {t.location && <p className="text-sm text-muted-foreground">{t.location}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
