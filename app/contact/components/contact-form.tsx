"use client";

import { FormInput } from "@/components/form/form-input";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { ContactFieldValues, useContactForm } from "../hooks/use-contact-form";

export function ContactForm() {
  const contactForm = useContactForm();

  function onSubmitValid(data: ContactFieldValues) {
    console.log(JSON.stringify(data));
  }

  return (
    <form id="contact-form" onSubmit={contactForm.handleSubmit(onSubmitValid)}>
      <FieldGroup>
        <FormInput
          control={contactForm.control}
          name="name"
          type="text"
          label="Name"
          placeholder="John Doe"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          pattern="[a-zA-ZÀ-ÿ\s'-]+"
        />
        <FormInput
          control={contactForm.control}
          name="email"
          type="email"
          label="Email"
          placeholder="john.doe@example.com"
          autoComplete="email"
          required
          maxLength={254}
        />
        <FormInput
          control={contactForm.control}
          name="phone"
          type="tel"
          label="Phone (optional)"
          placeholder="+420777073441"
          description="Include country code for international numbers"
          autoComplete="tel"
          pattern="^\+?[1-9]\d{1,14}$"
        />
        <FormTextarea
          control={contactForm.control}
          name="message"
          label="Message"
          placeholder="Tell me about your project..."
          required
          minLength={10}
          maxLength={1000}
          rows={5}
        />
      </FieldGroup>
      <div className="flex justify-end mt-7">
        <Button type="submit">SEND</Button>
      </div>
    </form>
  );
}
