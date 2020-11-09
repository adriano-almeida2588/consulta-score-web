import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Vehicle from './Vehicle'
import Person from './Person'

export default class Record extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public codigoReferencia: string

  @column()
  public criterio: string

  @column({columnName: 'documento_cliente'})
  public documentoCliente:string

  @column({columnName: 'nome_cliente'})
  public nomeCliente:string

  @column({columnName: 'cliente_id'})
  public clienteId: number

  @hasMany(() => Vehicle, {
    foreignKey: 'registroId',
    serializeAs: 'veiculos'
  })
  public vehicles: HasMany<typeof Vehicle>

  @hasMany(() => Person, {
    foreignKey: 'registroId',
    serializeAs: 'pessoas'
  })
  public people: HasMany<typeof Person>

  @column({ columnName: 'is_pesquisa_conjunto' })
  public isPesquisaConjunto:boolean

  @column({ columnName: 'criado_por' })
  public criadoPor:string

  @column({ columnName: 'modificado_por' })
  public modificadoPor:string

  @column({ columnName: 'status' })
  public status:string

  @column({ columnName: 'data_ultima_modificacao' })
  public dataUltimaModificacao:DateTime

  @column({ columnName: 'data_validade' })
  public dataValidade:Date

  @column.dateTime({ columnName: 'data_criacao', autoCreate: true })
  public dataCriacao:DateTime
}