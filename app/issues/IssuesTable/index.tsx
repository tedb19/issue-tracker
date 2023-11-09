import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  issues: Issue[];
}

const IssuesTable = ({ issues }: Props) => (
  <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="hidden md:table-cell">
          Status
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="hidden md:table-cell">
          Created At
        </Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {issues.map((issue) => (
        <Table.Row key={issue.id}>
          <Table.Cell>
            <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
            <div className="block md:hidden">
              <IssueStatusBadge status={issue.status} />
            </div>
          </Table.Cell>
          <Table.Cell className="hidden md:table-cell">
            <IssueStatusBadge status={issue.status} />
          </Table.Cell>
          <Table.Cell className="hidden md:table-cell">
            {issue.createdAt.toDateString()}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Root>
);

export default IssuesTable;
