import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'tipo_proprietario' })
  public tipoProprietario:string

  @column({ columnName: 'documento_proprietario' })
  public documentoProprietario:string

  @column({ columnName: 'placa' })
  public placa:string

  @column({ columnName: 'renavam' })
  public renavam:string

  @column({ columnName: 'uf' })
  public uf:string

  @column({ columnName: 'is_antt' })
  public isAntt:boolean

  @column({ columnName: 'registro_id' })
  public registroId:number

  @column.dateTime({ columnName: 'data_criacao', autoCreate: true })
  public dataCriacao: DateTime
}
