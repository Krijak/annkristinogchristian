import { Box, Stack, Typography } from "@mui/material";
import TransportogovernattingImg from "../../public/FrontpageImages/Transportogovernatting.jpg";
import AnimatedImage from "../Components/AnimatedImage";
import FullWidthStack from "../Components/FullWidthStack";
import PageWrapper from "../Components/PageWrapper";

const TransportOgOvernatting = () => {
  return (
    <PageWrapper>
      <AnimatedImage
        style={{ minWidth: "100px" }}
        maxWidth={{ xs: "400px", sm: "400px", lg: "500px" }}
        paddingLeft={9}
        paddingRight={9}
        alt="Erlend og Sofie på båt"
        src={TransportogovernattingImg}
      />
      <Stack maxWidth={"600px"} mt={4} padding={6}>
        <Typography variant="h1">OVERNATTING</Typography>
        <Typography mt={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          lobortis massa vitae nunc accumsan, in congue justo feugiat. Donec a
          nisl sapien. Vivamus blandit pharetra quam a pellentesque. Sed vel
          turpis vulputate, porttitor mi ut, iaculis nunc. Aliquam arcu enim,
          commodo eget volutpat a, bibendum quis ipsum. Ut elementum feugiat
          justo, id feugiat nisl blandit ac.
        </Typography>
      </Stack>
      <Stack
        style={{ maxWidth: "800px", minWidth: "200px" }}
        mt={10}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={2}
      >
        <AnimatedImage
          width={"50%"}
          alt="Erlend og Sofie på teplantasje "
          style={{ transform: "rotateY(180deg)" }}
          src={TransportogovernattingImg}
        />
        <AnimatedImage
          width={"30%"}
          alt="Azorene "
          src={TransportogovernattingImg}
        />
      </Stack>
      <Stack alignItems={"center"}>
        <Box maxWidth={"500px"} mt={5} padding={6}>
          <Typography variant="h1">TRANSPORT</Typography>
          <Typography mt={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis massa vitae nunc accumsan, in congue justo feugiat. Donec a
            nisl sapien.
          </Typography>
        </Box>
      </Stack>
      <FullWidthStack>
        <Stack
          gap={4}
          maxWidth={"900px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Box maxWidth={"300px"}>
            <Typography mb={1} className={"apply-scroll-animation"}>
              <b>Lorem ipsum</b>
            </Typography>
            <Typography className={"apply-scroll-animation"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lobortis massa vitae nunc accumsan, in congue justo feugiat. Donec
              a nisl sapien. Vivamus blandit pharetra quam a pellentesque. Sed
              vel turpis vulputate, porttitor mi ut, iaculis nunc.
            </Typography>
          </Box>
          <Box maxWidth={"300px"}>
            <Typography mb={1} className={"apply-scroll-animation"}>
              <b>Lorem ipsum</b>
            </Typography>
            <Typography className={"apply-scroll-animation"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lobortis massa vitae nunc accumsan, in congue justo feugiat. Donec
              a nisl sapien. Vivamus blandit pharetra quam a pellentesque. Sed
              vel turpis vulputate, porttitor mi ut, iaculis nunc.
            </Typography>
          </Box>
          <Box maxWidth={"300px"} width={"100%"}>
            <Typography mb={1} className={"apply-scroll-animation"}>
              <b>Lorem ipsum</b>
            </Typography>
            <Typography className={"apply-scroll-animation"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lobortis massa vitae nunc accumsan, in congue justo feugiat. Donec
              a nisl sapien. Vivamus blandit pharetra quam a pellentesque. Sed
              vel turpis vulputate, porttitor mi ut, iaculis nunc.
            </Typography>
          </Box>
        </Stack>
      </FullWidthStack>
    </PageWrapper>
  );
};

export default TransportOgOvernatting;
