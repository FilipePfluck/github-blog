import {
  FaGithub,
  FaCalendar,
  FaComment,
  FaChevronLeft,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Card } from '../Card'

import * as S from './styles'

interface PostHeadingProps {
  login: string
  timePassed: string
  numberOfComments: number
  title: string
  url: string
}

export const PostHeading = ({
  login,
  numberOfComments,
  timePassed,
  title,
  url,
}: PostHeadingProps) => {
  return (
    <Card>
      <S.Container>
        <S.TopContent>
          <Link to="/">
            <FaChevronLeft /> VOLTAR
          </Link>
          <a href={url}>
            VER NO GITHUB <FaExternalLinkAlt />
          </a>
        </S.TopContent>
        <S.Title>{title}</S.Title>
        <S.IconsGroup>
          <div>
            <FaGithub />
            <p>{login}</p>
          </div>
          <div>
            <FaCalendar />
            <p>{timePassed}</p>
          </div>
          <div>
            <FaComment />
            <p>{numberOfComments} comentários</p>
          </div>
        </S.IconsGroup>
      </S.Container>
    </Card>
  )
}
