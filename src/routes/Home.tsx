import { Box, Carousel, IconButton, VStack } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <VStack>
      <Carousel.Root
        slideCount={5}
        loop
        width="100%"
        height="720px"
        bg="yellow.100"
        position="relative"
        autoplay={{ delay: 8000 }}
      >
        <Carousel.Control justifyContent="center" width="100%" height="100%">
          <Carousel.PrevTrigger asChild>
            <IconButton size="lg" variant="plain">
              <FaChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="100%" height="100%">
            {[1, 2, 3, 4, 5].map((_src, index) => (
              <Carousel.Item key={index} index={index}>
                <Box w="100%" h="720px" rounded="lg" fontSize="2.5rem">
                  {index + 1}
                </Box>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.NextTrigger asChild>
            <IconButton size="lg" variant="plain">
              <FaChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>

        <Carousel.IndicatorGroup
          position="absolute"
          right={10}
          bottom={4}
          gap="5"
          colorPalette={"purple"}
        >
          <Carousel.Indicator key={0} index={0} />
          <Carousel.Indicator key={1} index={1} />
          <Carousel.Indicator key={2} index={2} />
          <Carousel.Indicator key={3} index={3} />
          <Carousel.Indicator key={4} index={4} />
        </Carousel.IndicatorGroup>
      </Carousel.Root>
    </VStack>
  );
}
