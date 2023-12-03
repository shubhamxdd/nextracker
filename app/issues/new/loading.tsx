import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CreateIssueLoading = () => {
  return (
    <>
      <div className="flex-col flex items-center">
        <h1 className="text-2xl my-4">
          <Skeleton width={200} />
        </h1>
        <Box className="max-w-xl space-y-2 w-full">
          <Skeleton />
          <Skeleton height={200} />
        </Box>
      </div>
    </>
  );
};

export default CreateIssueLoading;
