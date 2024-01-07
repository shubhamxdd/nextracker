"use client";

import { FaBug } from "react-icons/fa";
import Logo from "./Logo";
import { Container, Flex } from "@radix-ui/themes";
import Dropdown from "./Dropdown";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="gap-6 mb-5 border-b px-16 max-sm:px-3 max-md:px-4 max-lg:px-10 p-4">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap="4">
            <Logo logo={FaBug} />
            <NavLinks />
          </Flex>
          <Dropdown />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
