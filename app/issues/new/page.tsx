// import IssueForm from "@/components/issue/IssueForm";

import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/components/issue/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />
});

const NewIssuePage = () => {
  return (
    <div className="flex-col flex items-center">
      <h1 className="text-2xl my-4">Create a new Issue</h1>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;
