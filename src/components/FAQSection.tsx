import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE_DISPLAY = "89014 34774";

export function FAQSection() {
  const faqs = [
    {
      q: "How fast does IndiaICU respond to an emergency call?",
      a: `We aim to dispatch an ambulance immediately upon your call to ${PHONE_DISPLAY}. Response time depends on your location and traffic conditions — our dispatch team prioritises getting to you as fast as possible, day or night.`,
    },
    {
      q: "Is the ICU ambulance available 24 hours a day?",
      a: "Yes. Our ICU ambulances are available round the clock — 24 hours a day, 7 days a week, 365 days a year. Emergencies don't follow schedules, and neither do we.",
    },
    {
      q: "Do you provide intercity ambulance service?",
      a: "Yes. We specialise in intercity ICU transfers — safely moving critical patients between cities with full life-support equipment on board. Routes include Delhi to Lucknow, Delhi to Mumbai, Delhi to Chandigarh, and many more across India.",
    },
    {
      q: "How is the pricing determined? Are there hidden charges?",
      a: "Pricing is transparent and communicated upfront before dispatch. Costs depend on the type of ambulance (ICU, oxygen, basic), distance, and equipment required. There are no hidden fees — you are told the rate before we dispatch.",
    },
    {
      q: "What support is available if I call outside business hours?",
      a: `Our emergency dispatch line (${PHONE_DISPLAY}) and WhatsApp support are both live 24/7. You will always reach a real person — not a voicemail — when you call IndiaICU.`,
    },
    {
      q: "What equipment is inside an ICU ambulance?",
      a: "Our ICU ambulances are equipped with a mechanical ventilator, cardiac monitor, defibrillator, oxygen supply system, IV infusion pumps, suction apparatus, and a trained ICU paramedic. Every vehicle meets advanced life-support standards.",
    },
    {
      q: "Which cities does IndiaICU cover?",
      a: "We operate across Delhi NCR and are active in major cities across India including Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Jaipur, Lucknow, Chandigarh, Patna, and Ahmedabad.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common questions about IndiaICU emergency ambulance services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border" data-testid={`faq-item-${i}`}>
              <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors text-base md:text-lg py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
