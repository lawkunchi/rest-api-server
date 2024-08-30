import { BaseController } from "./BaseController";
import { IReq, IRes } from "../interfaces";
import { IssueService } from "../services/IssueService";

export class IssuesController extends BaseController {
  private issueService: IssueService;

  constructor(issueService: IssueService) {
    super();
    this.issueService = issueService;
  }

  create(req: IReq, res: IRes): void {
    const issue = this.issueService.create(req.body);
    res.status(201).send(issue);
  }

  read(req: IReq, res: IRes): void {
    const issue = this.issueService.read(req.params.id);
    if (issue) {
      res.status(200).send(issue);
    } else {
      res.status(404).send({ message: "Issue not found" });
    }
  }

  readAll(req: IReq, res: IRes): void {
    const issues = this.issueService.readAll();
    if (issues) {
      res.status(200).send(issues);
    } else {
      res.status(404).send({ message: "Issues not found" });
    }
  }

  update(req: IReq, res: IRes): void {
    const updatedIssue = this.issueService.update(req.params.id, req.body);
    if (updatedIssue) {
      res.status(200).send(updatedIssue);
    } else {
      res.status(404).send({ message: "Issue not found" });
    }
  }

  delete(req: IReq, res: IRes): void {
    const isDeleted = this.issueService.delete(req.params.id);
    if (isDeleted) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Issue not found" });
    }
  }
}
