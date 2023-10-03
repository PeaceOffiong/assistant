import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function HomeHeader() {
  return (
    <>
      <Flex bg={"black"} p={"12"} w={"100vw"} justify={"center"} minH={"100vh"}>
        <Flex
          color={"#fff"}
          w={"100%"}
          maxW={"1100px"}
          flexWrap={{
            base: "wrap",
            lg: "nowrap",
          }}
          align={"center"}
        >
          <Flex
            w={{
              base: "100%",
              lg: "50%",
            }}
            flexDir={"column"}
          >
            <Heading>Meet your webpage assistant</Heading>
            <Text> Explore with clarity, click and discover</Text>
            <Link href={"/Assistant"}>
              <Box
                my={"6"}
                p={"4"}
                w={{
                  base: "70%",
                  lg: "50%",
                }}
                fontSize={{
                  base: "xs",
                  lg: "sm",
                }}
                bg={"red.500"}
                color={"#fff"}
                borderRadius={"full"}
                fontWeight={"600"}
                cursor={"pointer"}
                boxShadow={"base"}
              >
                See the Assistant
              </Box>
            </Link>
          </Flex>
          <Flex
            w={{
              base: "100%",
              lg: "50%",
            }}
            h={"100%"}
          >
            <HomeHeaderLHS />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function HomeHeaderLHS() {
  return (
    <Flex
      w={"100%"}
      pos={"relative"}
      h={{
        base: "300px",
        lg: "400px",
      }}
      mt={{
        base: "10",
        lg: "none",
      }}
    >
      <Flex w={"100%"}>
        <InfoCard left="35%" text="hello i'm  uree" img="/awareState.svg" />
      </Flex>
    </Flex>
  );
}

type InfoCardProps = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  text: string;
  img: string;
};
function InfoCard(props: InfoCardProps) {
  return (
    <Flex pos={"absolute"} {...props} flexDir={"column"}>
      <Flex pos={"relative"}>
        <Text
          bg={"#fff"}
          py={"2"}
          px={"4"}
          color={"#000"}
          borderRadius={"full"}
          //   opacity={"0"}
          _hover={{
            opacity: "1",
          }}
          my={"2"}
          transition={"opacity 0.5s ease-in-out"}
          pos={"absolute"}
          left={"-10px"}
          fontSize={"xs"}
          minW={"150px"}
        >
          {props.text}
        </Text>
      </Flex>

      <Image
        src={props.img}
        boxSize={{
          base: "24",
          lg: "400px",
        }}
        border={"4px solid"}
        borderRadius={"full"}
        objectFit={"cover"}
        p={"none"}
        bg={"#cbf0f8"}
      />
    </Flex>
  );
}
