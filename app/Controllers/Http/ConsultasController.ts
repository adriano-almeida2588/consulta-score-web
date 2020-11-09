// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConsultasController {
    public async index ({ view }) {
        return view.render('consulta/index')
    }
}
