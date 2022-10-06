import React from 'react'
import * as S from './styles'

interface SearchProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  numberOfPosts: number
}

export const Search = ({ setQuery, numberOfPosts }: SearchProps) => {
  return (
    <S.Container>
      <S.TopContent>
        <p>Publicações</p>
        <span>{numberOfPosts} publicações</span>
      </S.TopContent>
      <S.Input
        placeholder="Buscar conteúdo"
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
    </S.Container>
  )
}
