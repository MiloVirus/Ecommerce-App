import React from "react";
import { useState, useEffect } from "react";
import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../images/logo.png";

const NavBar = () => {
  const [onSwitch, setOnSwitch] = useState(false);

  const switchSelection = () => {
    setOnSwitch(!onSwitch);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
    } else {
      setOnSwitch(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Flex flexDir="column" id="mainNavBar" w="100%">
      <Flex fontFamily="Rubik" justifyContent={'center'}>
        <Flex
          id="desktopDisplay"
          display={["none", "none", "flex", "flex"]}
          justifyContent="center"
        >
          <Image src={logo} h="50px" w="50px" alignSelf="center" ml={2} />
          <Button
            cursor={"pointer"}
            p="2"
            as="a"
            color="black"
            variant="none"
            aria-label="home"
            my={5}
            mx={2}
            w="100%"
          >
            <Image src="./img/logo.png" alt="" />
            <Text alignSelf="center" p={1} color="#393C44">
              KeySpace
            </Text>
          </Button>
          <Button
            cursor={"pointer"}
            p="2"
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="home"
            my={5}
            mx={2}
            w="100%"
          >
            Home
          </Button>
          <Button
            cursor={"pointer"}
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="about"
            my={5}
            mx={2}
            w="100%"
          >
            Products
          </Button>
          <Button
            cursor={"pointer"}
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="contact"
            my={5}
            mx={2}
            w="100%"
          >
            Contact
          </Button>
          <Button
            id="createAccount"
            cursor={"pointer"}
            as="a"
            color="white"
            aria-label="contact"
            bg="#7BE0AD"
            my={5}
            pr={9}
            pl={9}
            w="100%"
          >
            Create Account
          </Button>
        </Flex>

        {
          // Mobile Navbar----------------------------------
        }

        <Flex display={["flex", "flex", "none", "none"]} w="100%">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={1}
            icon={<HamburgerIcon />}
            onClick={() => switchSelection()}
            alignSelf="center"
            m={2}
            position="absolute"
          ></IconButton>
          <Flex
            alignSelf="center"
            fontFamily="Rubik"
            fontWeight="bold"
            justifyContent={"center"}
            w="100%"
          >
            <Image src={logo} h="50px" w="50px" alignSelf="center" m={1} />
            <Text alignSelf="center" p={2} color="#393C44">
              KeySpace
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="mobileMenu"
        flexDir="column"
        align="center"
        m="auto"
        w="100%"
        fontFamily="Rubik"
        display={onSwitch ? "flex" : "none"}
      >
        <Button
          p="2"
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="home"
          my={5}
          mx={2}
          w="100%"
        >
          Home
        </Button>
        <Button
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="about"
          my={5}
          mx={2}
          w="100%"
        >
          Products
        </Button>
        <Button
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="contact"
          my={5}
          mx={2}
          w="100%"
        >
          Contact
        </Button>
        <Button
          as="a"
          color="white"
          variant="ghost"
          aria-label="contact"
          bg="#7BE0AD"
          my={5}
          pr={9}
          pl={9}
          w="100%"
        >
          Create Account
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
