import { Issue } from "./Issue";

export type IssueListProps = {
  issues: Issue[];
  onUpdate: (issue: Issue) => void;
  onDelete: (id: string) => void;
};
