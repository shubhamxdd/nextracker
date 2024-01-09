import { Button, Flex, Text } from "@radix-ui/themes";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ currentPage, itemCount, pageSize }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <MdOutlineKeyboardDoubleArrowLeft />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <IoIosArrowBack />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
        <IoIosArrowForward />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
        <MdOutlineKeyboardDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
