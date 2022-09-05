/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get('/test', async () => {
  return { test: 'test' }
})
Route.post('/lista2/ex1',"Lista1sController.ex1")
Route.post('/lista2/ex2',"Lista1sController.ex2")
Route.post('/lista2/ex3',"Lista1sController.ex3")
Route.post('/lista2/ex4',"Lista1sController.ex4")
Route.post('/lista2/ex5',"Lista1sController.ex5")
Route.post('/lista2/ex6',"Lista1sController.ex6")
Route.post('/lista2/ex7',"Lista1sController.ex7")
Route.post('/lista2/ex8',"Lista1sController.ex8")
Route.post('/lista2/ex9',"Lista1sController.ex9")

