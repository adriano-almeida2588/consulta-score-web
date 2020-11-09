import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  protected tableName = 'people'

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
