import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_fantasia', 200).notNullable()
      table.string('razao_social', 200).notNullable()
      table.string('cnpj', 14).notNullable()
      table.string('telefone', 11).notNullable()
      table.string('email', 100).notNullable()
      table.string('cep', 8).notNullable()
      table.string('logradouro', 200).notNullable()
      table.string('numero').notNullable()
      table.string('complemento', 100)
      table.string('bairro', 200).notNullable()
      table.string('cidade', 200).notNullable()
      table.string('uf', 2).notNullable()
      table.dateTime('data_criacao').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
