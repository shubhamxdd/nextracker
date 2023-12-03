import { TextField } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CreateIssueLoading = () => {
  return (
    <>
      <div className="flex-col flex items-center h-full">
        <h1 className="text-2xl my-4">
          <Skeleton />
        </h1>
        <div className="max-w-xl space-y-2 w-full">
          <Skeleton />
          <div className="h-[40vh]">
            <Skeleton />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateIssueLoading;
