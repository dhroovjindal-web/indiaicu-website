import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackPhoneCall, trackWhatsApp, trackFormSubmit } from "@/lib/analytics";

const PHONE_NUMBER = "8901434774";
const PHONE_DISPLAY = "89014 34774";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional(),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const msg = [
      `*New Ambulance Request — IndiaICU*`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `City: ${values.city}`,
      values.message ? `Details: ${values.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    trackFormSubmit();

    const url = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noreferrer");
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-[#050b14] relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Direct Contact */}
          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-white mb-4">
                Emergency? <br/> Call Now
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our dispatch center is online 24/7. Don't wait.
              </p>
              
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                onClick={() => trackPhoneCall("contact-section")}
                className="group flex flex-col p-6 rounded-xl bg-white/5 border border-primary/20 hover:border-primary/50 transition-colors mb-6"
                data-testid="contact-call-card"
              >
                <span className="text-sm font-semibold text-primary mb-2 flex items-center gap-2 uppercase tracking-wider">
                  <Phone className="h-4 w-4" /> Direct Line
                </span>
                <span className="text-3xl md:text-4xl font-black text-white group-hover:text-primary transition-colors">
                  {PHONE_DISPLAY}
                </span>
              </a>

              <a
                href={`https://wa.me/91${PHONE_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsApp("contact-section")}
                className="group flex flex-col p-6 rounded-xl bg-white/5 border border-[#25D366]/20 hover:border-[#25D366]/50 transition-colors"
                data-testid="contact-whatsapp-card"
              >
                <span className="text-sm font-semibold text-[#25D366] mb-2 flex items-center gap-2 uppercase tracking-wider">
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp Support
                </span>
                <span className="text-2xl font-bold text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp: {PHONE_DISPLAY}
                </span>
              </a>
            </div>
            
            <div className="pt-8 border-t border-white/15">
              <p className="text-gray-400 font-medium">IndiaICU — Pan India Emergency Ambulance Network</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Request Callback / Book Non-Emergency</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Full Name" className="bg-background border-border" {...field} data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone Number" type="tel" className="bg-background border-border" {...field} data-testid="input-contact-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="City" className="bg-background border-border" {...field} data-testid="input-contact-city" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Condition / Requirements (Optional)" 
                          className="bg-background border-border resize-none h-24" 
                          {...field} 
                          data-testid="input-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white" data-testid="button-contact-submit">
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
