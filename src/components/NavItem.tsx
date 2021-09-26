import React, { FC } from "react";
import { Box, HStack, useColorModeValue } from "@chakra-ui/react";

interface NavItemProps {
  label: string;
  onClick?: () => void | Promise<void>;
  icon: React.ReactNode;
}

export const NavItem: FC<NavItemProps> = ({
  icon,
  label,
  onClick,
}): JSX.Element => {
  return (
    <HStack
      as="a"
      spacing="2"
      px="3"
      py="2"
      rounded="md"
      transition="all 0.2s"
      color={useColorModeValue("blackAlpha.700", "gray.200")}
      _hover={{
        bg: useColorModeValue("gray.200", "whiteAlpha.200"),
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {icon && (
        <Box aria-hidden fontSize="md">
          {icon}
        </Box>
      )}
      <Box fontWeight="semibold">{label}</Box>
    </HStack>
  );
};
