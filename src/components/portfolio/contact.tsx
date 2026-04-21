import { useState } from "react";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { z } from "zod";
import { Section } from "./section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { site } from "@/data/site";
import { Github, Linkedin, Mail, MessageCircle, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1500),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: standardSchemaResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const subject = encodeURIComponent(`Portfolio inquiry — ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let's talk data."
      description={`Open to junior data engineering roles, internships, and data-focused opportunities in the UAE.`}
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-xl border border-border bg-card p-6"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" autoComplete="name" {...register("name")} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} {...register("message")} />
            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
            {sent && (
              <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" /> Opening your mail client…
              </span>
            )}
          </div>
        </form>

        <div className="space-y-3">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-smooth hover:border-primary/40"
          >
            <Mail className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">{site.email}</p>
            </div>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-smooth hover:border-primary/40"
          >
            <Linkedin className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">Let&apos;s connect — recruiters welcome</p>
            </div>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-smooth hover:border-primary/40"
          >
            <Github className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium">See the code</p>
            </div>
          </a>
          {site.whatsapp && (
            <a
              href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-smooth hover:border-primary/40"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="text-sm font-medium">{site.whatsapp}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}