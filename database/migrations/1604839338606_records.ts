import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Records extends BaseSchema {
  protected tableName = 'records'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo_referencia', 16).notNullable()
      table.string('criterio').notNullable()
      table.string('documento_cliente').notNullable()
      table.string('nome_cliente').notNullable()
      table.string('cliente_id').notNullable()
      table.boolean('is_pesquisa_conjunto').defaultTo(false)
      table.string('criado_por', 100).notNullable()
      table.string('modificado_por', 100)
      table.dateTime('data_ultima_modificacao')
      table.string('status').defaultTo('EM PROCESSAMENTO')
      table.date('data_validade').notNullable()
      table.dateTime('data_criacao').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
