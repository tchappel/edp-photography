import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import { contact } from "@/lib/contact";
import { ContactForm } from "./components/contact-form";

export default function ContactPage() {
  return (
    <Container component="section" className="space-y-8">
      <div>
        <Typography variant="h5" component="h2" className="font-bold">
          CONTACT
        </Typography>
      </div>
      <div className="space-y-6">
        <div>
          <Typography variant="h6" component="h3" className="font-medium">
            STUDIO
          </Typography>
          <Typography variant="caption" component="p">
            <Link
              external
              href={contact.address.href}
              variant="inherit"
              underline="hover"
            >
              {contact.address.label}
            </Link>
          </Typography>
        </div>

        <div>
          <Typography variant="h6" component="h3" className="font-medium">
            EMAIL
          </Typography>
          <Typography variant="caption" component="p">
            <Link
              external
              href={`mailto:${contact.email}`}
              underline="hover"
              variant="inherit"
            >
              {contact.email}
            </Link>
          </Typography>
        </div>

        <div>
          <Typography variant="h6" component="h3" className="font-medium">
            PHONE
          </Typography>
          <Typography variant="caption" component="p">
            <Link
              external
              href={`tel:${contact.phone}`}
              variant="inherit"
              underline="hover"
            >
              +420 777 07 34 41
            </Link>
          </Typography>
        </div>
      </div>
      <ContactForm />
    </Container>
  );
}
