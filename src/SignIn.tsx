import React, { FC } from "react";
import firebase from "firebase/compat";
import { auth } from "./firebaseSetup";
import { Box, Button, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/all";

export const SignIn: FC = (): JSX.Element => {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };
  const signInWithFacebook = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <>
      <VStack>
        <Button
          variant="outline"
          leftIcon={<Box as={FaGoogle} color="red.500" />}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          leftIcon={
            <Box
              as={FaFacebook}
              color={useColorModeValue("facebook.500", "facebook.300")}
            />
          }
          onClick={signInWithFacebook}
        >
          Sign in with Facebook
        </Button>
        <Text color={"orange.500"}>
          Please be polite, or you will be banned for life!
        </Text>
        <Text>
          5 messages limited per user, or you will be banned for life too.
          &#128540;
        </Text>
      </VStack>
    </>
  );
};
