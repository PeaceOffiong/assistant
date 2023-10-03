"use client";

import { Info } from "@/app/Assistant/page";
import { Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useRef } from "react";

export const defaulInfo: Info = {
  right: "20px",
  top: "",
  bottom: "20px",
  left: "",
  details: "",
  icon: "",
  active: false,
};
type CardProps = {
  setDetails: Dispatch<SetStateAction<Info>>;
  info: string;
  setActive: Dispatch<SetStateAction<number>>;
  isActive: number;
  id: number;
  opacity: string;
  image?: string;
  setOpacity: Dispatch<SetStateAction<string>>;
  icon: string;
};

export function Card(props: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  function getElementPosition(e: React.MouseEvent) {
    const { left, right, top, bottom } = ref.current!.getBoundingClientRect();
    props.setDetails({
      left: left.toString(),
      right: right.toString(),
      top: top.toString(),
      bottom: bottom.toString(),
      details: props.info,
      active: true,
      icon: props.icon,
    });
    props.setOpacity("0.1");
    props.setActive(props.id);
  }

  return (
    <Flex
      w={props.isActive == props.id ? "300px" : "150px"}
      h={"150px"}
      bg={"#cbf0f8"}
      p={"4"}
      borderRadius={"6px"}
      color={"blue.600"}
      onClick={getElementPosition}
      opacity={props.id == props.isActive ? "1" : props.opacity}
      ref={ref}
      m={"5"}
      bgImage={props.image}
      backgroundSize={"cover"}
      transition={"width 0.5s ease-in"}
    ></Flex>
  );
}

type ButtonsProps = {
  text: string;
  color: string;
};
export function Buttons(props: CardProps & ButtonsProps) {
  const ref = useRef<HTMLDivElement>(null);
  function getElementPosition(e: React.MouseEvent) {
    const { left, right, top, bottom } = ref.current!.getBoundingClientRect();
    props.setDetails({
      left: left.toString(),
      right: right.toString(),
      top: top.toString(),
      bottom: bottom.toString(),
      details: props.info,
      active: true,
      icon: props.icon,
    });
    props.setOpacity("0.1");
    props.setActive(props.id);
  }

  return (
    <Flex
      cursor={"pointer"}
      px={"4"}
      py={"2"}
      borderRadius={"full"}
      onClick={getElementPosition}
      opacity={props.id == props.isActive ? "1" : props.opacity}
      ref={ref}
      m={"5"}
      border={"2px solid"}
      bg={"white"}
      borderColor={"#fff"}
      color={props.color}
    >
      <Text> {props.text}</Text>
    </Flex>
  );
}
