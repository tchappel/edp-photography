import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";

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
              href="https://maps.google.com/?q=Žerotínova+1850,+130+00+Praha+3-Žižkov"
              variant="inherit"
              underline="hover"
            >
              Žerotínova 1850, 130 00 Praha 3-Žižkov
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
              href="mailto:info@emanueldellapia.com"
              underline="hover"
              variant="inherit"
            >
              info@emanueldellapia.com
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
              href="tel:+420777073441"
              variant="inherit"
              underline="hover"
            >
              +420 777 07 34 41
            </Link>
          </Typography>
        </div>
      </div>
    </Container>
  );
}
