import { Box, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import React from 'react'

const DashboardData1 = () => {
  return (
    <Box w="95%" h="auto" m="auto" mt="20px">
    <Box
      h="auto"
      w="100%"
      m="auto"
      mt="15px"
      mb="15px"
      p="8px"
      borderRadius="11px"
      color="white"
      fontWeight="bold"
      bgColor="skyblue"
    >
      <Heading size="lg">Dashboard Chart</Heading>
    </Box>
    <Box w="90%" h="auto" m="auto" mt={"40px"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        <GridItem
          w="100%"
          borderRadius={"5"}
          p="30"
          bgColor="teal"
          color={"white"}
        >
          <Heading size={"md"}>Total Products</Heading>
          <Heading size={"sm"} p="2">
            200
          </Heading>
        </GridItem>
        <GridItem borderRadius={"5"} p="30" bgColor="orange" color={"white"}>
          <Heading size={"md"}>Weekly Sells</Heading>
          <Heading size={"sm"} p="2">
            $ 21900
          </Heading>
        </GridItem>
        <GridItem borderRadius={"5"} p="30" bgColor={"purple"} color={"white"}>
          <Heading size={"md"}>Weekly Order Count</Heading>
          <Heading size={"sm"} p="2">
            567
          </Heading>
        </GridItem>
      </Grid>

      <Grid m="auto" mt="45px" templateColumns="repeat(2,1fr)" gap={35}>
        <GridItem>
          <Heading size="md">Category Counts Graph</Heading>
          <Box w="100%" h="350px" m="auto" mt="15px">
            <Image
              src="https://homework.study.com/cimages/multimages/16/figure_11329113386568070969.png"
              h="100%"
              w="100%"
            />
          </Box>
        </GridItem>
        <GridItem>
          <Heading size="md">Visitors From</Heading>
          <Box w="100%" h="350px" m="auto" mt="25px">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnx5X305RjjiYzclmCmBqSAYmQATAcPHU48Q&usqp=CAU"
              h="auto%"
              w="auto"
              m="auto"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  </Box>
  )
}

export default DashboardData1;