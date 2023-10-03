"use client";

import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { defaulInfo } from "../card/card";
import { Info } from "@/app/Assistant/page";
type Ureeprops = {
  info: Info;
  setDetails: Dispatch<SetStateAction<Info>>;
  setActive: Dispatch<SetStateAction<number>>;
  setOpacity: Dispatch<SetStateAction<string>>;
};

export default function Ai(props: Ureeprops) {
  const [introduce, setIntroduce] = useState(false);
  useEffect(() => {
    if (introduce) setIntroduce(!introduce);
  }, [props.info.active]);
  return (
    <Flex
      pos={"fixed"}
      transition={"all 0.7s ease-in"}
      right={props.info.right}
      left={props.info.left}
      top={props.info.top}
      bottom={props.info.bottom}
      transform={props.info.active ? "translateY(40px)" : ""}
      minW={"max-content"}
      maxW={"fit-content"}
      maxH={"fit-content"}
      flexWrap={"wrap"}
      zIndex={"4"}
      onClick={() => {
        if (!props.info.active) setIntroduce(!introduce);
      }}
    >
      {props.info.active && (
        <Flex
          p={"4"}
          borderRadius={"6"}
          w={"170px"}
          h={"fit-content"}
          flexDir={"column"}
          bg={"#fff"}
          justify={"space-between"}
          transition={"all 0.7s ease-in"}
          boxShadow={"sm"}
        >
          <Image alt={"icon"} src={props.info.icon} boxSize={"15px"} />
          <Text fontSize={"xs"}>{props.info.details}</Text>
          <Button
            size={"xs"}
            w={"80%"}
            onClick={() => {
              props.setDetails(defaulInfo);
              props.setOpacity("1");
              props.setActive(0);
            }}
            colorScheme={"blackAlpha"}
            my={"3"}
          >
            Done
          </Button>
        </Flex>
      )}
      {introduce && (
        <>
          <Text
            bg={"#fff"}
            color={"#000"}
            px={"4"}
            borderRadius={"full"}
            h={"min-content"}
            fontSize={"xs"}
          >
            Hello i am uree.
          </Text>
          <Image
            src={"/raisingHands.svg"}
            alt={"uree page assisstant"}
            boxSize={"60px"}
            transition={"all 0.7s ease-in"}
          />
        </>
      )}
      {!introduce && (
        <Image
          src={props.info.active ? "/awareState.svg" : "/ease.svg"}
          alt={"uree page assisstant"}
          boxSize={"35px"}
          transition={"all 0.7s ease-in"}
        />
      )}
    </Flex>
  );
}
