import { Flex, Card, Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueLoadingPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap={"3"} my={"2"}>
        <Skeleton width={50} />
        <Skeleton width={100} />
      </Flex>
      <Card className="prose" mt={"4"}>
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueLoadingPage;
