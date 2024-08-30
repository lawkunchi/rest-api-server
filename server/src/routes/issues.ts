import { Router } from 'express';
import { IssueService } from '../services/IssueService';
import { IssuesController } from '../controllers/IssuesController';

const issueService = new IssueService();
const issuesController = new IssuesController(issueService);

const router = Router();
router.get('/', (req, res) => issuesController.readAll(req, res));
router.post('/', (req, res) => issuesController.create(req, res));
router.get('/:id', (req, res) => issuesController.read(req, res));
router.put('/:id', (req, res) => issuesController.update(req, res));
router.delete('/:id', (req, res) => issuesController.delete(req, res));

export default router;