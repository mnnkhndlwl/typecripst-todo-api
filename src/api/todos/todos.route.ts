import { Router, Response, Request } from "express";
import { Todo, Todos, TodoWithId } from "./todos.model";
import * as TodoHandlers from './todos.handlers';
import { validateRequest } from "../../middlewares";
import { ParamsWithId } from "../../interfaces/ParamsWithId";

const router = Router();

router.get('/', TodoHandlers.findAll);
router.get(
  '/:id',
  validateRequest({
    params: ParamsWithId,
  }),
  TodoHandlers.findOne,
);
router.post(
  '/',
  validateRequest({
    body: Todo,
  }),
  TodoHandlers.createOne,
);
router.put(
  '/:id',
  validateRequest({
    params: ParamsWithId,
    body: Todo,
  }),
  TodoHandlers.updateOne,
);
router.delete(
  '/:id',
  validateRequest({
    params: ParamsWithId,
  }),
  TodoHandlers.deleteOne,
);

// router.get<{},Todo[] >('/', (req,res) =>{ // we are responding with an array of TODOs
//     res.json([
//         {
//             content : "Learn Typescript",
//             done : false
//         }
//     ]); 
// },);

export default router;