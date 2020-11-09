import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()
      table.string('password').notNullable()
      table.string('email', 100).notNullable().unique()
      table.dateTime('data_criacao').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
