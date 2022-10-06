import { useEffect, useState } from 'react'
import { FaGithub, FaBuilding, FaUsers } from 'react-icons/fa'
import api from '../../services/api'
import { Card } from '../Card'

import * as S from './styles'

interface User {
  name: string
  followers: number
  avatar_url: string
  bio: string
  company?: string
  login: string
}

export const Profile = () => {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    api.get('/users/FilipePfluck').then((response) => setUser(response.data))
  }, [])

  return (
    <Card>
      <S.ProfileImage src={user.avatar_url} />
      <S.ProfileData>
        <strong>{user.name}</strong>
        <p>{user.bio}</p>
        <S.IconsGroup>
          <FaGithub />
          <p>{user.login}</p>
          {user.company && (
            <>
              <FaBuilding />
              <p>{user.company}</p>
            </>
          )}
          <FaUsers />
          <p>{user.followers} seguidores</p>
        </S.IconsGroup>
      </S.ProfileData>
    </Card>
  )
}
