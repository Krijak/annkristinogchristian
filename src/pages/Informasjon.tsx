import { Link, Stack, Typography } from "@mui/material";
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
        <Typography variant="h2">SPØRSMÅL?</Typography>
        <Typography mt={1}>
          Ta kontakt med{" "}
          <Link href="mailto:kristina.jakobsen@gmail.com">
            kristina.jakobsen@gmail.com
          </Link>
        </Typography>
        <Typography variant="h2" mt={4}>
          TALER OG TOASTMASTER
        </Typography>
        <Typography mt={1}>Informasjon kommer</Typography>
        <Typography variant="h2" mt={4}>
          DRESSCODE
        </Typography>
        <Typography mt={1}>Mørk dress</Typography>
        <Typography variant="h2" mt={4}>
          KAN JEG TA MED BARN?
        </Typography>
        <Typography mt={1}>
          Vi ønsker å feire dagen vår i voksent selskap, og håper barna kan være
          igjen hos en barnevakt akkurat denne dagen.
        </Typography>
      </Stack>
    </PageWrapper>
  );
};

export default Informasjon;
