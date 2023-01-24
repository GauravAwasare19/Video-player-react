import React from "react";
import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import { AiOutlineCloudUpload, AiOutlineUpload } from "react-icons/ai";

const Upload = () =>{
    return(
        <Container maxW={'container.xl'} p={"16"} h={"full"}>
            <VStack color={'purple.500'} h={"full"} justifyContent={"center"}>
                <AiOutlineCloudUpload size={"10vmax"}/>
                 <form>
                    <HStack>
                        <Input required type={'file'} css={{"&::file-selector-button":{border:'none',width:'calc(100% +36px)',height:"100%", marginLeft:"-18px",color:"purple",backgroundColor:"white"}}}/>
                        <Button colorScheme={"purple"} type={"submit"}>
                            Upload
                        </Button>
                    </HStack>
                 </form>
            </VStack>
        </Container>
    )
}
export default Upload;