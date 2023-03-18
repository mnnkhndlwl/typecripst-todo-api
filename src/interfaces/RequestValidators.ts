import {AnyZodObject} from 'Zod';

export default interface RequestValidators {
  params?: AnyZodObject,
  body?: AnyZodObject,
  query?: AnyZodObject,
}