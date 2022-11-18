import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {

  const [digi, setDigi] = useState([]);
  const [digiLists, setDigiLists] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [permaDigiLists, setPermaDigiLists] = useState([]);
  const [permaCurrentList, setPermaCurrentList] = useState([]);
  const [combinedLevel, setCombinedLevel] = useState([]);
  const [digiFilter, setDigiFilter] = useState([]);
  const {user, verifyToken} = useContext(UserContext)
  const {products, total, getProducts} = useContext(ProductContext)
  const [checks, setChecks] = useState([
    { level: "Rookie", status: false },
    { level: "Champion", status: false },
    { level: "Mega", status: false },
    { level: "Ultimate", status: false },
    { level: "Fresh", status: false },
    { level: "In Training", status: false },
    { level: "Training", status: false },
    { level: "Armor", status: false },
  ]);

  let arrayDigi = [];

  useEffect(() => {

    verifyToken()
    
    const callApi = async () => {
      const response = await axios.get(
        "https://digimon-api.vercel.app/api/digimon"
      );
      console.log(response.data);
      setDigi(response.data);
      const responsePages = [...response.data];

      for (let i = 0; i < responsePages.length; i++) {
        arrayDigi[i] = responsePages.splice(0, 27);
      }
      setCurrentList(arrayDigi);
      setPermaCurrentList(arrayDigi);
      setDigiLists(arrayDigi[0]);
      setPermaDigiLists(arrayDigi[0]);
      setCombinedLevel(arrayDigi[0]);
    };

    callApi();
  }, [verifyToken]);

  useEffect(() => {
    getProducts()
  }, [getProducts])
  
  const callArray = (index) => {
    console.log(digiLists);
    setDigiLists([...currentList[index]]);
  };

  const callSwitch = (level) => {
    console.log(digiFilter);
    let filterPlease = [];
    let filterLevelPages = [];
    let filterLevelPages2 = [];

    checks.forEach((element) => {
      if (element.status === true && element.level === level) {
        const filteredByLevel = digi.filter(
          (digimon) => digimon.level === level
        );
        console.log(filteredByLevel);

        filterPlease = [...digiFilter, ...filteredByLevel];
        setDigiFilter([...digiFilter, ...filteredByLevel]);
        

        for (let i = 0; i < filterPlease.length; i++) {
          filterLevelPages[i] = filterPlease.splice(0, 10);
        }

        setDigiLists(filterLevelPages[0]);
        setCurrentList(filterLevelPages);
        
        console.log("checkbox is checked");
        
      } else if (element.status === false && element.level === level) {
        console.log(digiFilter);
        const filterRemove = digiFilter.filter(
          (digimon) => digimon.level !== level
        );
        const filterRemovePages = [...filterRemove];
        console.log(filterRemove);
        console.log("here first");

        if (filterRemovePages.length < 1) {
          setDigiLists(permaDigiLists);
          setCurrentList(permaCurrentList);
          setDigiFilter(filterRemove);
          console.log("here second");
        } else {
          for (let i = 0; i < filterRemovePages.length; i++) {
            filterLevelPages2[i] = filterRemovePages.splice(0, 10);
          }
          setDigiLists(filterLevelPages2[0]);
          setCurrentList([...filterLevelPages2]);
          setDigiFilter(filterRemove);
          console.log("here");
        }
      }
    });
  };

  const switchChange = (level) => {
    checks.forEach((element) => {
      if (level === element.level) {
        element.status = !element.status;
      }
    });

    callSwitch(level);
  };

  return (
    <>
      <Box fontFamily="Rubik" w="80%" margin={"auto"}>
        <Accordion allowToggle={true} borderRadius="20px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign={["center", "center", "center", "left"]}
                  fontWeight="bold"
                  color="#444445"
                  fontFamily="Rubik"
                >
                  Filter Products
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              fontWeight="medium"
              color="#7d7d7d"
              alignItems="center"
              textAlign="center"
              fontFamily="Rubik"
            >
              <Checkbox p={2} onChange={() => switchChange("Rookie")}>
                Rookie
              </Checkbox>
              <Checkbox p={2} onChange={() => switchChange("In Training")}>
                In Training
              </Checkbox>
              <Checkbox p={2} onChange={() => switchChange("Champion")}>
                Champion
              </Checkbox>
              <Checkbox p={2} onChange={() => switchChange("Ultimate")}>
                Ultimate
              </Checkbox>
              <Checkbox p={2} onChange={() => switchChange("Mega")}>
                Mega
              </Checkbox>
              <Checkbox p={2} onChange={() => switchChange("Armor")}>
                Armor
              </Checkbox>
              <Checkbox p={2} onChange={() => switchChange("Training")}>
                Training
              </Checkbox>
              <Checkbox p={2} onChange={() => switchChange("Fresh")}>
                Fresh
              </Checkbox>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box overflowY="auto" h={["70%", "70%", "90%"]} borderRadius="20px">
          <SimpleGrid
            bg="gray.50"
            columns={{ sm: 2, md: 2, lg: 4 }}
            spacing="5"
            p="10"
            textAlign="center"
            rounded="lg"
            color="gray.400"
            fontFamily="Rubik"
            fontWeight="medium"
          >
            {digiLists.map((element, index) => (
              <Box
                w="100%"
                key={index}
                boxShadow="xs"
                p="6"
                rounded="md"
                bg="white"
              >
                <Flex>
                  <Box w="100%">
                    <Box className="digiName">
                      <Text fontSize="1.3em" color="#505050">
                        {element.name}
                      </Text>
                    </Box>
                    <Box className="digiLevel">
                      <Text>{element.level}</Text>
                    </Box>
                  <Flex flexShrink="0.3" className="digiLevel" justifyContent={"center"}>
                    <img width="100px" src={element.img}></img>
                  </Flex>
                  <Flex flexShrink="0.3" className="digiLevel" justifyContent={"center"}>
                    <Button fontWeight={'medium'} className='viewMore' bg="#7BE0AD" color="white" m={2}>
                      View More
                    </Button>
                  </Flex>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
          <Box>
            {currentList.map((element, index) => (
              <Button key={index} onClick={() => callArray(index)}>
                {index + 1}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Products;
