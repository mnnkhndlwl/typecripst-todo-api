import { Router,Response,Request } from "express";
import {Todo,Todos, TodoWithId} from "./todos.model";

const router = Router();

router.get('/', async (req : Request,res : Response<TodoWithId[]>) =>{ // response should be an array of todo items
    const result = await Todos.find();
    const todos = await result.toArray();
    res.json(todos); 
},);

// router.get<{},Todo[] >('/', (req,res) =>{ // we are responding with an array of TODOs
//     res.json([
//         {
//             content : "Learn Typescript",
//             done : false
//         }
//     ]); 
// },);

export default router;