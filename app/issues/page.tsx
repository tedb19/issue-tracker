import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new">New Issue</Link>
    </div>
  );
};

export default IssuesPage;
