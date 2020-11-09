import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Record from './Record'
import User from './User'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'nome_fantasia' })
  public nomeFantasia:string

  @column({ columnName: 'razao_social' })
  public razaoSocial:string

  @column({ columnName: 'cnpj' })
  public cnpj:string

  @column({ columnName: 'telefone' })
  public telefone:string

  @column({ columnName: 'email' })
  public email:string

  @column({ columnName: 'cep' })
  public cep:string

  @column({ columnName: 'logradouro' })
  public logradouro:string

  @column({ columnName: 'numero' })
  public numero:string

  @column({ columnName: 'complemento' })
  public complemento:string

  @column({ columnName: 'bairro' })
  public bairro:string

  @column({ columnName: 'cidade' })
  public cidade:string

  @column({ columnName: 'uf' })
  public uf:string

  @hasMany(() => Record, {
    localKey: 'uuid',
    foreignKey: 'cliente_id',
    serializeAs: 'registros'
  })
  public records: HasMany<typeof Record>

  @hasMany(() => User, {
    localKey: 'uuid',
    foreignKey: 'cliente_id',
    serializeAs: 'usuarios'
  })
  public users: HasMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public dataCriacao: DateTime
}
