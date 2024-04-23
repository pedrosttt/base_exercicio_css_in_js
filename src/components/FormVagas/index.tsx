import { FormEvent, useState } from 'react'
import * as Styled from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Styled.Formulario onSubmit={aoEnviarForm}>
      <Styled.Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Styled.BotaoPesquisar type="submit">Pesquisar</Styled.BotaoPesquisar>
    </Styled.Formulario>
  )
}

export default FormVagas
