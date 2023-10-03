"use client";

import { Buttons, defaulInfo } from "@/components/card/card";
import Ai from "@/components/ureeAvatar/Ai";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export type Info = {
  left: string;
  right: string;
  top: string;
  bottom: string;
  details: string;
  active: boolean;
  icon: string;
};

export default function AvatarLayout() {
  const [info, setInfo] = useState<Info>(defaulInfo);
  const [isActive, setIsActive] = useState(0);
  const [opacity, setOpacity] = useState("1");
  return (
    <Flex
      bg={"black"}
      minH={"100dvh"}
      p={"6"}
      justify={"center"}
      pos={"relative"}
    >
      <Flex maxW={"1100px"} w={"100%"} flexDir={"column"}>
        <Text color={"#fafafa"}> Click on buttons to move to see quotes</Text>

        <Flex>
          <Buttons
            setDetails={setInfo}
            info="A success button"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={20}
            setOpacity={setOpacity}
            icon="/success.svg"
            text="success"
            color="green.500"
          />
          <Buttons
            setDetails={setInfo}
            info="A Delete button"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={20}
            setOpacity={setOpacity}
            icon="/delete.svg"
            text="Delete"
            color="red.500"
          />
          <Buttons
            setDetails={setInfo}
            info="A Like button"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={20}
            setOpacity={setOpacity}
            icon="/like.svg"
            text="like"
            color="blue.500"
          />
          <Buttons
            setDetails={setInfo}
            info="A success button"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={20}
            setOpacity={setOpacity}
            icon="/success.svg"
            text="success"
            color="green.500"
          />
          <Buttons
            setDetails={setInfo}
            info="Another button"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={20}
            setOpacity={setOpacity}
            icon="/delete.svg"
            text="Delete"
            color="red.500"
          />
          <Buttons
            setDetails={setInfo}
            info="A Like button"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={20}
            setOpacity={setOpacity}
            icon="/like.svg"
            text="like"
            color="blue.500"
          />
        </Flex>
      </Flex>
      <Ai
        info={info}
        setDetails={setInfo}
        setOpacity={setOpacity}
        setActive={setIsActive}
      />
    </Flex>
  );
}
