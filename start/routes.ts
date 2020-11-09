import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('consulta/index')
Route.get('auth/register', 'AuthController.register')
Route.post('auth/register', 'AuthController.register')
Route.get('auth/login', 'AuthController.login')
Route.post('auth/signin', 'AuthController.signIn')
Route.get('politica/criterio/:criterio', 'CadastrosController.create')
Route.post('politica/autonomo', 'RecordsController.store')
Route.post('politica/individual', 'RecordsController.storePerson')
Route.post('politica/veiculo', 'RecordsController.storeVehicle')
Route.get('/consultas/listagem-recentes', 'RecordsController.index')