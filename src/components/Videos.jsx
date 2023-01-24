import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";



const Videos = () => {
  const videosArr = [
    'https://www.youtube.com/embed/y2omP4c7WKw',
    'https://www.youtube.com/embed/cu1wuANDgsQ',
    'https://www.youtube.com/embed/A3swrmC5ssY',
    'https://www.youtube.com/embed/CHYUnAO_O6g',
    'https://www.youtube.com/embed/u5MYhlBH5EE',
    'https://www.youtube.com/embed/X8ipUgXH6jw',
    'https://www.youtube.com/embed/K1raAUE7t-c',
    'https://www.youtube.com/embed/oNcs95JtUUM',
  ];


  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <Box
          controls
          controlsList="nodownload"
          as='iframe'
          src={videoSrc}
          width='100%'
      sx={{
        aspectRatio: '16/9'
      }}
          style={{
            width: '100%',
            paddingTop:"20px",
            paddingLeft:"20px"
          }}
        ></Box>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <h1>Sample Video 1</h1>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;