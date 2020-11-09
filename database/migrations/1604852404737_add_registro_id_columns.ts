import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehicles extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('registro_id').notNullable()
      table.foreign('registro_id', 'foreignKey_record_id').references('id').inTable('records')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
