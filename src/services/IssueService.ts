import { Issue } from "../models/Issue";

export class IssueService {
  private issues: Issue[] = [];

  public create(issue: Issue): Issue {
    issue.id = this.generateId();
    this.issues.push(issue);
    return issue;
  }

  public read(id: string): Issue | undefined {
    return this.issues.find((issue) => issue.id === id);
  }

  public update(id: string, updatedIssue: Partial<Issue>): Issue | undefined {
    const issueIndex = this.issues.findIndex((issue) => issue.id === id);
    if (issueIndex === -1) return undefined;
    const issue = this.issues[issueIndex];
    this.issues[issueIndex] = { ...issue, ...updatedIssue };
    return this.issues[issueIndex];
  }

  public delete(id: string): boolean {
    const issueIndex = this.issues.findIndex((issue) => issue.id === id);
    if (issueIndex === -1) return false;
    this.issues.splice(issueIndex, 1);
    return true;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
