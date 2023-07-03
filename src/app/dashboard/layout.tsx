"use client";
// import DashboardHeader from "@/components/dashboard/dashboardHeader";
// import DashboardSidebar from "@/components/dashboard/dashboardSidebar";
// import { Box, Container, Text, Flex } from "@chakra-ui/react";
// import { ReactNode } from "react";

// const Layout = ({ children }: { children: ReactNode }) => {
//   return (
//     <Flex>
//       <Box>
//         <Box right={0} left={0} pos={"fixed"} top={0}>
//           <DashboardHeader />
//         </Box>
//         <Box right={0} left={0} pos={"fixed"}>
//           <DashboardSidebar />
//         </Box>

//         <Container
//           maxW={["100%", "70%", "60%"]}
//           overflowY="auto"
//           height="100vh"
//           pos={"absolute"}>
//           {children}
//         </Container>
//       </Box>
//     </Flex>
//   );
// };

// export default Layout;
import DashboardHeader from "@/components/templates/home/layouts/dashboard/dashboardHeader";
import DashboardSidebar from "@/components/templates/home/layouts/dashboard/dashboardSidebar";
import { Box, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex minHeight="100vh">
      <Box width="100%">
        <Box position="fixed" top={0} left={0} right={0}>
          <DashboardHeader />
        </Box>
        <Box position="fixed" top={0} left={0} bottom={0} py={"4em"}>
          <DashboardSidebar />
        </Box>

        <Container
          maxW={["100%", "70%", "60%"]}
          overflowY="auto"
          height="100vh"
          //   marginLeft={{ base: "0", lg: "240px" }}
          //   paddingLeft={{ base: "0", lg: "16px" }}
          paddingTop="64px"
          mx={"auto"}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default Layout;
