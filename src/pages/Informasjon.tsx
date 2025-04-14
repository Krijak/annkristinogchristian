import { Box, Link, Stack, Typography } from "@mui/material";
import Flowers1 from "../../public/flowers_01.gif";
import Flowers2 from "../../public/flowers_02.gif";
import Flowers3 from "../../public/flowers_03.gif";

import AnimatedImage from "../Components/AnimatedImage";
import PageWrapper from "../Components/PageWrapper";
import { routes } from "../variables";

const Informasjon = () => {
  const alt = "Blomster";
  return (
    <PageWrapper>
      <Stack flexDirection={"row"} gap={1} marginLeft={8} marginRight={8}>
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt={alt}
          src={Flowers1}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt={alt}
          src={Flowers2}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt={alt}
          src={Flowers3}
        />
      </Stack>
      <Stack maxWidth={"600px"} mt={4} padding={6}>
        <Box className={"apply-scroll-animation"}>
          <Typography variant="h2" mt={4}>
            RSVP
          </Typography>
          <Typography mt={1}>
            Si ifra <Link href={routes.rsvp}>her</Link> innen 1. mai om du har
            eller ikke har anledning til å komme.
          </Typography>
        </Box>
        <Box className={"apply-scroll-animation"}>
          <Typography variant="h2" mt={4}>
            TALER OG UNDERHOLDNING
          </Typography>
          <Typography mt={1}>
            Vi setter stor pris på om du ønsker å bidra med noe
            underholdningsinnslag i bryllupet. Meld ifra til toastmaster Erik
            Thu Lunde på 483 00 084 innen 1. juli.
            <br /> <br />
            Maks 5 minutter per innslag, takk😊
          </Typography>
        </Box>
        <Box className={"apply-scroll-animation"}>
          <Typography variant="h2" mt={4}>
            DRESSCODE: Dress
          </Typography>
          <Typography mt={1}>
            Vi ønsker sommerfarger, kort eller sid kjole eller det du er
            komfortabel i. Det er gress og grus i hagen så de høyeste stilettene
            er gjerne ikke det mest praktiske. Lave eller høye sko som er god å
            danse i er perfekt!
          </Typography>
        </Box>
        <Box className={"apply-scroll-animation"}>
          <Typography variant="h2" mt={4}>
            PRAKTISK INFO
          </Typography>
          <Typography mt={1}>
            Vi er heldig å få feire kjærligheten i hagen til Turid og Svein❤️ Vi
            planlegger for vielse ute og håper på fint vær. Middagen og resten
            av kvelden blir i telt.
          </Typography>
          <Typography mt={2}>
            Ta med deg klær etter været og gjerne en varm genser til kvelden.
          </Typography>
          <Typography mt={2}>
            Vi ønsker å feire kjærleiken i uformelle omgivelser i hagen med fine
            folk og fin natur! Vi håper det blir en gledens dag fylt med
            solskinn og blomster. Vi håper også på en god fest! Derfor tenker vi
            at barn har det best hjemme men er hjertelig velkommen på dagtid.
          </Typography>
        </Box>
      </Stack>
    </PageWrapper>
  );
};

export default Informasjon;
