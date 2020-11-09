import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  protected tableName = 'people'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('documento', 11).notNullable()
      table.string('rg', 13).nullable()
      table.string('rg_emissor', 20).nullable()
      table.string('uf_emissor', 2).notNullable()
      table.string('nome', 200).notNullable()
      table.string('nome_mae', 200).nullable()
      table.string('nome_pai', 200).nullable()
      table.date('data_nascimento').nullable()
      table.string('sexo', 20).nullable()
      table.string('cnh', 11).nullable()
      table.string('cnh_uf', 2).nullable()
      table.date('cnh_data_habilitacao_1').nullable()
      table.date('cnh_validade').nullable()
      table.date('cnh_emissao').nullable()
      table.string('cnh_categoria').nullable()
      table.string('cnh_codigo_seguranca').nullable()
      table.string('telefone', 11).nullable()
      table.string('celular', 11).nullable()
      table.string('email', 100).nullable()
      table.dateTime('data_criacao').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
