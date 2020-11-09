import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'name' })
  public name:string

  @column({ columnName: 'password' })
  public password:string

  @column({ columnName: 'email' })
  public email:string

  @column({ columnName: 'cliente_id' })
  public clienteId:number

  @column.dateTime({ columnName: 'data_criacao', autoCreate: true })
  public dataCriacao: DateTime
}
