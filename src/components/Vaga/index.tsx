import React from 'react'
import * as Styled from './style'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Styled.Vaga>
    <Styled.VagaTitulo>{props.titulo}</Styled.VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Styled.VagaLink href="#">Ver detalhes e candidatar-se</Styled.VagaLink>
  </Styled.Vaga>
)

export default Vaga
