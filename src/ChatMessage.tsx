import React, { FC } from "react";
import { Flex, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

type Message = {
  text: string;
  uid: string;
  photoURL: string;
  displayName: string;
};

interface ChatMessageProps {
  message: Message;
  currentUserUid: string;
}

export const ChatMessage: FC<ChatMessageProps> = ({
  message: { text, uid, photoURL, displayName },currentUserUid
}): JSX.Element => {

  const color = useColorModeValue("gray.600", "gray.400")

  if (currentUserUid !== uid) {
    return (
      <>
        <HStack spacing="2" flexShrink={0} mr="14" py="2">
          <Image boxSize={"40px"} src={photoURL} alt={"profile"} />
          <Flex direction="column" fontWeight="medium">
            <Text
              fontSize="xs"
              lineHeight="shorter"
              color={color}
            >
              {displayName}
            </Text>
            <Text>{text}</Text>
          </Flex>
        </HStack>
      </>
    );
  } else {
    return (
        <>
          <HStack spacing="4" flexShrink={0} mr="16" py="2" justify={"end"}>
            <Flex direction="column" fontWeight="medium">
              <Text>{text}</Text>
            </Flex>
          </HStack>
        </>
    )
  }
};
