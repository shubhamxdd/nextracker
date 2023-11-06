import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuePage = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-semibold">IssuePage</h1>
      <Button>
        <Link href="/issues/new">Create New issue</Link>
      </Button>
    </>
  );
};

export default IssuePage;
