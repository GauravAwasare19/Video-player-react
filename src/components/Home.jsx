import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
import img5 from '../assets/image5.jpg'


const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading textTransform={'uppercase'} py={"2"} w={'fit-content'} borderBottom={'2px solid'} >Services</Heading>
                <Stack h="full" p={"4"} alignItems={"center"} direction={['column', 'row']}>
                    <Image src={img5} h={['40', '400']}  />
                    <Text  letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
                    Nurtures you with personalized attention in a competitive atmosphere
Improves your performance in school & board examinations
Builds your analytical & reasoning skills to succeed in Olympiads & Scholarship examinations such as NTSE
Lays the strong groundwork for entrance examinations such as NEET, JEE, UPSC, IAS, IFS, CAT, MAT, etc.
Introduces you to innovative learning methods to make learning fun, engaging and easy
Focuses on conceptual and application-based learning, thereby debunking old rote-learning methods
Indulges in more than just academic syllabi
Offers you competitive exposure through national level test series that enables you to know your potential at all India level
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={"full"} h={'100vh'}>
            <img src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Welcome to the Classroom !</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img2} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Explore the courses</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img3} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Learn from the best</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img4} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Subscribe us to get updates!</Heading>
        </Box>
    </Carousel>
)


export default Home;