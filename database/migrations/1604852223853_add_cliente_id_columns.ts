import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('cliente_id').notNullable()
      table.foreign('cliente_id', 'foreignKey_client_id').references('id').inTable('clients')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
