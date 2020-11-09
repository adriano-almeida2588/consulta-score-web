import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Person extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'documento' })
  public documento:string

  @column({ columnName: 'rg' })
  public rg:string

  @column({ columnName: 'rg_emissor' })
  public rgEmissor:string

  @column({ columnName: 'uf_emissor' })
  public ufEmissor:string

  @column({ columnName: 'nome' })
  public nome:string

  @column({ columnName: 'nome_mae' })
  public nomeMae:string

  @column({ columnName: 'nome_pai' })
  public nomePai:string

  @column({ columnName: 'data_nascimento' })
  public dataNascimento:Date

  @column({ columnName: 'sexo' })
  public sexo:string

  @column({ columnName: 'cnh' })
  public cnh:string

  @column({ columnName: 'cnh_uf' })
  public cnhUf:string

  @column.date({ columnName: 'cnh_data_habilitacao_1' })
  public cnhDataHabilitacao1:DateTime

  @column.date({ columnName: 'cnh_validade' })
  public cnhValidade:DateTime

  @column.date({ columnName: 'cnh_emissao' })
  public cnhEmissao:DateTime

  @column({ columnName: 'cnh_categoria' })
  public cnhCategoria:string

  @column({ columnName: 'cnh_codigo_seguranca' })
  public cnhCodigoSeguranca:string

  @column({ columnName: 'telefone' })
  public telefone:string

  @column({ columnName: 'celular' })
  public celular:string

  @column({ columnName: 'email' })
  public email:string

  @column({ columnName: 'registro_id' })
  public registroId:number

  @column.dateTime({ columnName: 'data_criacao', autoCreate: true })
  public dataCriacao: DateTime
}