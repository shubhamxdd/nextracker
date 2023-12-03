import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueFormSkeleton = () => {
  return (
    <>
      <div className="flex-col items-center flex">
        <div className="w-full h-full">
          <Skeleton height={30} className="mb-1" />
          <Skeleton height={360} width={580} />
        </div>
        <div className="flex mt-11 w-full">
          <Skeleton height={30} width={100} />
        </div>
      </div>
    </>
  );
};

export default IssueFormSkeleton;
