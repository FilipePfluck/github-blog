import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import { PostCard } from '../../Components/PostCard'
import { Profile } from '../../Components/Profile'
import { Search } from '../../Components/Search'
import api from '../../services/api'
import * as S from './styles'

export interface Post {
  title: string
  id: number
  body: string
  timePassed: string
  number: number
}

interface Item {
  title: string
  created_at: string
  body: string
  id: number
  number: number
}

interface Response {
  items: Item[]
}

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getPosts = () => {
      api
        .get<Response>(
          `/search/issues?q=${query}%20repo:FilipePfluck/github-blog`,
        )
        .then((response) => {
          const serializedPosts = response.data.items.map((item) => {
            return {
              ...item,
              timePassed: formatDistanceToNow(new Date(item.created_at), {
                locale: ptBR,
                addSuffix: true,
              }),
            }
          })

          setPosts(serializedPosts)
        })
    }

    if (query === '') {
      getPosts()
      return
    }

    const delayDebounce = setTimeout(getPosts, 800)

    return () => clearTimeout(delayDebounce)
  }, [query])

  return (
    <>
      <Profile />
      <Search setQuery={setQuery} numberOfPosts={posts.length} />
      <S.PostList>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            text={post.body}
            timePassed={post.timePassed}
            id={post.number}
          />
        ))}
      </S.PostList>
    </>
  )
}
