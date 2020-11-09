import { schema } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CadastrosController {
    public async create ({ params, view }) {

        let criterios: string[] = ['autonomo','agregado','frota']

        if (criterios.includes(params.criterio))
        {
            return view.render('cadastro/create', { criterio: params.criterio })
        }
        else if (params.criterio === 'veiculo')
        {
            return view.render('cadastro/veiculo/create')
        }
        else if (params.criterio === 'individual')
        {
            return view.render('cadastro/individual/create')
        }
    }

    public async store ({ request, response, session } : HttpContextContract) {
        try {
            await request.validate({
                schema: schema.create({
                    cpf: schema.string(),
                    rg: schema.string(),
                    ufEmissor: schema.string(),
                    nomeMae: schema.string(),
                    dataNascimento: schema.date(),
                    cnh: schema.string(),
                    ufCNH: schema.string(),
                    habilitacao_1: schema.date(),
                    cnhEmissao: schema.date(),
                    cnhCategoria: schema.string(),
                    codigoSeguranca: schema.string()
                }),
    
                messages: {
                    'cpf.required': 'O campo é obrigatório',
                    'rg.required': 'O campo é obrigatório',
                    'ufEmissor.required': 'O campo é obrigatório',
                    'nomeMae.required': 'O campo é obrigatório',
                    'dataNascimento.required': 'O campo é obrigatório',
                    'cnh.required': 'O campo é obrigatório',
                    'ufCNH.required': 'O campo é obrigatório',
                    'habilitacao_1.required': 'O campo é obrigatório',
                    'cnhEmissao.required': 'O campo é obrigatório',
                    'cnhCategoria.required': 'O campo é obrigatório',
                    'codigoSeguranca.required': 'O campo é obrigatório'
                }
            })
            
            session.flash('success', 'Dados salvos com sucesso')
            response.redirect('/consultas/listagem-recentes')
        } catch (error) {
            session.flashMessages.set('errors', error)
            console.log(session.flashMessages.get('errors'))
        }
    }
}
