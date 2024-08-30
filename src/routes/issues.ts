import { Router } from 'express';
import { IssuesController } from '../controllers/IssuesController';

const router = Router();

router.post('/', IssuesController.createIssue);
router.get('/:id', IssuesController.getIssue);
router.put('/:id', IssuesController.updateIssue);
router.delete('/:id', IssuesController.deleteIssue);

export default router;