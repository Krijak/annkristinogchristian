import { Box, Link, Stack, Typography } from "@mui/material";
import KirkeLandskap from "../../public/Kirkelandskap.jpg";
import AnimatedImage from "../Components/AnimatedImage";
import DayAndDate from "../Components/DayAndDate";
import PageWrapper from "../Components/PageWrapper";
import TimeLineItem from "../Components/TimeLineItem";

const TimeLine = () => {
  return (
    <Box padding={6} pt={3}>
      <TimeLineItem header={<Typography variant="h2">13 : 00</Typography>}>
        <Box mb={4} className={"apply-scroll-animation"}>
          <Typography variant="h2">VIELSE</Typography>
          <Typography>
            Sted på sted
            <br />
            <Link mb={4} href="https://maps.app.goo.gl/TfHGsWy8UKy9Mvbm8">
              Adresse 1, 0101 Sted
            </Link>
          </Typography>
        </Box>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">14 : 30</Typography>}>
        <Box pb={4} className={"apply-scroll-animation"}>
          <Typography variant="h2">BRYLLUPSFEST</Typography>
          <Typography>
            Sted på sted
            <br />
            <Link mb={4} href="https://maps.app.goo.gl/TfHGsWy8UKy9Mvbm8">
              Adresse 1, 0101 Sted
            </Link>
          </Typography>
        </Box>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">15 : 00</Typography>}>
        <Typography marginBottom={2} className={"apply-scroll-animation"}>
          Velkommen
        </Typography>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">16 : 00</Typography>}>
        <Typography marginBottom={2} className={"apply-scroll-animation"}>
          Bordsetting
        </Typography>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">21 : 30</Typography>}>
        <Typography marginBottom={2} className={"apply-scroll-animation"}>
          Fest og moro
        </Typography>
      </TimeLineItem>
      <TimeLineItem
        isLast
        header={<Typography variant="h2">02 : 00</Typography>}
      >
        <Typography marginBottom={2} className={"apply-scroll-animation"}>
          Transport hjem
        </Typography>
      </TimeLineItem>
    </Box>
  );
};

const Loerdag = () => {
  return (
    <PageWrapper>
      <Stack>
        <DayAndDate
          day="Lørdag"
          date="30 / 08 / 25"
          pl={{ xs: 6, sm: 6, lg: 0 }}
        >
          BRYLLUPSDAGEN
        </DayAndDate>
        <Box
          ml={{ xs: 6, sm: 6, lg: 0 }}
          mr={{ xs: 6, sm: 6, lg: 0 }}
          maxWidth={"500px"}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis massa vitae nunc accumsan, in congue justo feugiat. Donec a
            nisl sapien. Vivamus blandit pharetra quam a pellentesque.
          </Typography>
        </Box>

        <Stack
          style={{ maxWidth: "800px", minWidth: "200px" }}
          mt={10}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={2}
        >
          <AnimatedImage alt="Giske kirke" src={KirkeLandskap} />
        </Stack>
        <Box pt={4} display={{ xs: "none", sm: "none", lg: "flex" }}>
          <TimeLine />
        </Box>

        <Stack
          display={{ xs: "flex", sm: "flex", lg: "none" }}
          maxWidth={"800px"}
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={{ xs: "center", sm: "center", lg: "flex-start" }}
          alignContent={{ xs: "center", sm: "center", lg: "flex-start" }}
          flexDirection={{ xs: "column", sm: "column", lg: "row" }}
          mt={7}
          pb={0}
        >
          <TimeLine />
        </Stack>
      </Stack>
    </PageWrapper>
  );
};

export default Loerdag;
