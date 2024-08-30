import { IReq, IRes } from '../interfaces';

export abstract class BaseController {
  abstract create(req: IReq, res: IRes): void;
  abstract read(req: IReq, res: IRes): void;
  abstract update(req: IReq, res: IRes): void;
  abstract delete(req: IReq, res: IRes): void;
}