import IssueForm from "@/components/issue/NewIssueForm";

const NewIssuePage = () => {
  return (
    <div className="flex-col flex items-center">
      <h1 className="text-2xl my-4">Create a new Issue</h1>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;
