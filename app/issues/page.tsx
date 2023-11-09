import prisma from "@/prisma/client";
import IssueActions from "./IssueActions";
import IssuesTable from "./IssuesTable";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="space-y-3">
      <IssueActions />
      <IssuesTable issues={issues} />
    </div>
  );
};

export default IssuesPage;
