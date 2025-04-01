import { Stack, Typography } from "@mui/material";
import Sjo from "../../public/FrontpageImages/sjo.jpg";

import AnimatedImage from "../Components/AnimatedImage";
import PageWrapper from "../Components/PageWrapper";

const Informasjon = () => {
  const alt = "temp";
  return (
    <PageWrapper>
      <Stack flexDirection={"row"} gap={1} marginLeft={8} marginRight={8}>
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt={alt}
          src={Sjo}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt={alt}
          src={Sjo}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt={alt}
          src={Sjo}
        />
      </Stack>
      <Stack maxWidth={"600px"} mt={4} padding={6}>
        <Typography variant="h2" mt={4}>
          RSVP
        </Typography>
        <Typography mt={1}>
          Si ifra innen 1. mai dersom du ikke har anledning til å komme.
        </Typography>
        <Typography variant="h2" mt={4}>
          TALER OG UNDERHOLDNING
        </Typography>
        <Typography mt={1}>
          Vi setter stor pris på om du ønsker å bidra med noe
          underholdningsinnslag i bryllupet. Meld ifra til toastmaster innen 1.
          juli.
          <br /> <br />
          Maks 5 minutter per innslag, takk😊
        </Typography>
        <Typography variant="h2" mt={4}>
          DRESSCODE
        </Typography>
        <Typography mt={1}>
          Sommerlig og pyntet! Mørk dress eller lys lindress for herrene og kort
          eller sid sommerkjole for damene. Det er gress og grus i hagen så de
          høyeste stilettene er gjerne ikke det mest praktiske. Lave eller høye
          sko som er god å danse i er perfekt!{" "}
        </Typography>
        <Typography variant="h2" mt={4}>
          PRAKTISK INFO
        </Typography>
        <Typography mt={1}>
          Vi er heldig å få feire kjærligheten i hagen til Turid og Svein❤️ Vi
          planlegger for vielse ute og håper på fint vær. Middagen og resten av
          kvelden blir i telt.
        </Typography>
        <Typography mt={2}>
          Ta med deg klær etter været og gjerne en varm genser til kvelden.
        </Typography>
        <Typography mt={2}>
          Vi ønsker å feire kjærleiken i uformelle omgivelser i hagen med fine
          folk og fin natur! Vi håper det blir en gledens dag fylt med solskinn
          og blomster. Vi håper også på en god fest! Derfor tenker vi at barn
          har det best hjemme men er hjertelig velkommen på dagtid.
        </Typography>
      </Stack>
    </PageWrapper>
  );
};

export default Informasjon;
