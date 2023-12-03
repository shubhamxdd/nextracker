import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueLoadingPage = () => {
  return (
    <div>
      <p>
        <Skeleton width={150} />
      </p>
      <p>
        <Skeleton width={250} />
      </p>
      <p>
        <Skeleton width={200} />
      </p>
      <p>
        <Skeleton width={100} />
      </p>
    </div>
  );
};

export default IssueLoadingPage;
