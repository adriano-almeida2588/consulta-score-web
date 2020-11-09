import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehicles extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tipo_proprietario', 2).notNullable()
      table.string('documento_proprietario', 14).notNullable()
      table.string('placa', 7).notNullable()
      table.string('renavam', 11).notNullable()
      table.string('uf', 2).notNullable()
      table.boolean('is_antt').defaultTo(false)
      table.dateTime('data_criacao').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
