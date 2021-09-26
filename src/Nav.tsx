import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseSetup";
import { Avatar, HStack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaSignOutAlt } from "react-icons/fa";
import { getUserInfo } from "./lib/user";
import { NavItem } from "./components/NavItem";

export const Nav = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const { colorMode, toggleColorMode } = useColorMode();
  const { displayName, photoURL } = getUserInfo(auth);

  return (
    <HStack spacing="3" flex="1" display={{ base: "flex" }} justify={"end"}>
      <NavItem
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        label="Theme"
        onClick={toggleColorMode}
      />
      {user && (
        <NavItem
          icon={<FaSignOutAlt />}
          label="Sign out"
          onClick={async () => await auth.signOut()}
        />
      )}
      {user && <Avatar name={displayName} src={photoURL} size="sm" />}
    </HStack>
  );
};
