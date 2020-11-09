import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'
import Record from 'App/Models/Record'
import Vehicle from 'App/Models/Vehicle'

export default class RecordsController {
  public async index ({ view }: HttpContextContract) {

    const records = await Record.query()
                                .preload('people')
                                .preload('vehicles')
                                .orderBy('data_criacao', 'desc')

    return view.render('consulta/index', {registros: records})
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request, response, session }: HttpContextContract) {

    const record = new Record()

    record.codigoReferencia = 'VRGR845B845ERQW',
    record.criterio = request.input('criterio'),
    record.documentoCliente = '95319478000195',
    record.nomeCliente = 'EMPRESA TESTE', 
    record.clienteId = 1,
    record.isPesquisaConjunto = false,
    record.criadoPor = 'ADRIANO ALMEIDA',
    record.dataValidade = new Date()

    record.criterio = record.criterio.toUpperCase()

    const person = new Person()
    person.documento = request.input('cpf'),
    person.rg = request.input('rg')
    person.ufEmissor = request.input('ufEmissor')
    person.rgEmissor = request.input('rgEmissor')
    person.nome = request.input('nome')
    person.nomeMae = request.input('nomeMae')
    person.nomePai = request.input('nomePai')
    person.dataNascimento = request.input('dataNascimento')
    person.sexo = request.input('sexo')
    person.telefone = request.input('telefone')
    person.celular = request.input('celular')
    person.email = request.input('email')
    person.cnh = request.input('cnh')
    person.cnhUf = request.input('ufCNH')
    person.cnhDataHabilitacao1 = request.input('habilitacao_1')
    person.cnhValidade = request.input('cnhValidade')
    person.cnhEmissao = request.input('cnhEmissao')
    person.cnhCategoria = request.input('cnhCategoria')
    person.cnhCodigoSeguranca = request.input('codigoSeguranca')
    
    person.documento = person.documento.replace(/\D/g,"")
    person.telefone = person.telefone.replace(/\D/g,"")
    person.celular = person.celular.replace(/\D/g,"")
    
    await record.related('people').createMany([person.serialize()])

    await record.related('vehicles').createMany([
      {
        tipoProprietario: 'PF',
        documentoProprietario: '03523005310',
        placa: 'HSG4634',
        renavam: '99328574898',
        uf: 'CE',
        isAntt: false
      }
    ])
    
    record.serialize();

    await record.save()

    session.flash('success', 'Dados salvos com sucesso')

    return response.redirect('/consultas/listagem-recentes')
  }

  public async storePerson ({ request, response, session }: HttpContextContract) {

    const record = new Record()

    record.codigoReferencia = 'TESTE_13GDVB7859',
    record.criterio = 'INDIVIDUAL',
    record.documentoCliente = '95319478000195',
    record.nomeCliente = 'TRÍLOGO TECNOLOGIA LTDA', 
    record.clienteId = 1,
    record.isPesquisaConjunto = false,
    record.criadoPor = 'ADRIANO ALMEIDA',
    record.dataValidade = new Date()

    const person = new Person()
    person.documento = request.input('cpf'),
    person.rg = request.input('rg')
    person.ufEmissor = request.input('ufEmissor')
    person.rgEmissor = request.input('rgEmissor')
    person.nome = request.input('nome')
    person.nomeMae = request.input('nomeMae')
    person.nomePai = request.input('nomePai')
    person.dataNascimento = request.input('dataNascimento')
    person.sexo = request.input('sexo')
    person.telefone = request.input('telefone')
    person.celular = request.input('celular')
    person.email = request.input('email')
    
    person.documento = person.documento.replace(/\D/g,"")
    person.telefone = person.telefone.replace(/\D/g,"")
    person.celular = person.celular.replace(/\D/g,"")

    await record.related('people').createMany([person.serialize()])
    
    record.serialize();

    await record.save()
    
    session.flash('success', 'Dados salvos com sucesso')

    return response.redirect('/consultas/listagem-recentes')
  }

  public async storeVehicle ({ request, response, session }: HttpContextContract) {

    const record = new Record()

    record.codigoReferencia = 'TESTE_13GDVB7859',
    record.criterio = 'VEÍCULO',
    record.documentoCliente = '95319478000195',
    record.nomeCliente = 'TRÍLOGO TECNOLOGIA LTDA', 
    record.clienteId = 1,
    record.isPesquisaConjunto = false,
    record.criadoPor = 'ADRIANO ALMEIDA',
    record.dataValidade = new Date()

    const vehicle = new Vehicle()
    vehicle.tipoProprietario = request.input('tipoProprietario'),
    vehicle.documentoProprietario = request.input('documento_proprietario')
    vehicle.placa = request.input('placa')
    vehicle.renavam = request.input('renavam')
    vehicle.uf = request.input('renavamUF')
    vehicle.isAntt = request.input('isAntt')
    
    vehicle.documentoProprietario = vehicle.documentoProprietario.replace(/\D/g,"")
    vehicle.placa = vehicle.placa.replace("-","")

    await record.related('vehicles').createMany([vehicle.serialize()])
    
    record.serialize();

    await record.save()
    
    session.flash('success', 'Dados salvos com sucesso')

    return response.redirect('/consultas/listagem-recentes')
  }
}
