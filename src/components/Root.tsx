import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
        fontWeight={"500"}
        fontSize={"lg"}
        bg={"purple.500"}
        color={"white"}
      >
        <HStack>
          <Link to="/">
            <Text>LAFTEL</Text>
          </Link>
          <Text>태그검색</Text>
          <Text>요일별 신작</Text>
          <Text>멤버십</Text>
          <Text>스토어</Text>
          <Text>이벤트</Text>
        </HStack>
        <HStack gap={4}>
          <FaSearch />
          <FaBell />
          <HStack>
            <Avatar.Root>
              <Avatar.Fallback name="Username"></Avatar.Fallback>
            </Avatar.Root>
            <Text>Username</Text>
            <FaChevronDown />
          </HStack>
        </HStack>
      </HStack>
      <Outlet />
    </Box>
  );
}
