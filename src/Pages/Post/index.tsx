import { useState, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns/esm'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

import { PostHeading } from '../../Components/PostHeading'

import * as S from './styles'

interface PostProps {
  authorLogin: string
  timePassed: string
  numberOfcomments: number
  url: string
  title: string
  body: string
}

export const Post = () => {
  const [post, setPost] = useState<PostProps>({} as PostProps)

  const { id } = useParams()

  useEffect(() => {
    api.get(`/repos/FilipePfluck/github-blog/issues/${id}`).then((response) => {
      const {
        user: { login },
        // eslint-disable-next-line
        html_url,
        title,
        body,
        // eslint-disable-next-line
        created_at,
        comments,
      } = response.data

      const timePassed = formatDistanceToNow(new Date(created_at), {
        locale: ptBR,
        addSuffix: true,
      })

      setPost({
        authorLogin: login,
        body,
        numberOfcomments: comments,
        timePassed,
        title,
        // eslint-disable-next-line
        url: html_url,
      })
    })
  }, [id])

  return (
    <>
      <PostHeading
        login={post.authorLogin}
        numberOfComments={post.numberOfcomments}
        timePassed={post.timePassed}
        title={post.title}
        url={post.url}
      />

      <S.PostBodyContainer>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </S.PostBodyContainer>
    </>
  )
}
