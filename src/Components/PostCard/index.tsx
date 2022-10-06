import { Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import * as S from './styles'

interface PostProps {
  id: number
  title: string
  text: string
  timePassed: string
}

export const PostCard = ({ title, text, timePassed, id }: PostProps) => {
  return (
    <Link to={`/post/${id}`}>
      <S.Container>
        <div>
          <strong>{title}</strong>
          <span>{timePassed}</span>
        </div>
        <S.PostBodyContainer>
          <ReactMarkdown>{text}</ReactMarkdown>
        </S.PostBodyContainer>
      </S.Container>
    </Link>
  )
}
