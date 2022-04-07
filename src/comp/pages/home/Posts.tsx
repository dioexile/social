import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../../../types'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useAuth } from '../../providers/useAuth';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { initialPost } from './initialPost';

interface IPosts {
  posts?: IPost[]
}

const Posts:React.FC<IPosts> = () => {

  const {db, user} = useAuth()
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(()=> {
    const unsub = onSnapshot(collection(db, 'posts'), doc => {
      const array: IPost[] = []
      doc.forEach((d:any) => {
        console.log('баг из-за forEach')
        array.unshift(d.data())
      })
      setPosts(array)
    })
    return () => (
      unsub()
    )
  }, [])

  return (
    <div className='post-list'>
      {posts.map((post, index) => (
        <div className='post-item' key={`Post-${index}`}>
          <Link to='/profile' className='user' >
            <div className="user-info">
              <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='user-photo'/>
              <h4 className='user-name'>{user?.name}</h4>
            </div>
          </Link>
          <p className='ago'>{post.createdAt}</p>
          <div className='post-content'>
            <p className='post-text'>{post.content}</p>
            {post?.images?.length && (
              <ImageList variant='masonry' cols={3} gap={8}>
                {post.images.map(image => (
                  <ImageListItem key={image}>
                    <img
                      src={image}
                      alt={''} />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </div>
        </div>
      ))}
      <div className='post-item'>
          <Link to='/profile' className='user' >
            <div className="user-info">
              <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='user-photo'/>
              <h4 className='user-name'>{user?.name}</h4>
            </div>
          </Link>
          <p className='ago'>{new Date().toString()}</p>
          <div className='post-content'>
            <p className='post-text'>Golden autumn in Siberia</p>
              <ImageList variant='masonry' cols={3} gap={8}>
                <ImageListItem>
                  <img
                    src='https://previews.123rf.com/images/muzhik/muzhik1303/muzhik130300050/18342954-.jpg'
                    alt={''} />
                </ImageListItem>
                <ImageListItem >
                  <img
                    src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07c189e6-cd61-4640-9577-ddcbb1c60226/d4bbuc4-868b7ea0-10e6-4812-85e6-80c9d6c87680.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3YzE4OWU2LWNkNjEtNDY0MC05NTc3LWRkY2JiMWM2MDIyNlwvZDRiYnVjNC04NjhiN2VhMC0xMGU2LTQ4MTItODVlNi04MGM5ZDZjODc2ODAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.69SCmt3TTCBvagaDA4yjrsP7C_DMMoTeNK0cVfolwjo'
                    alt={''} />
                </ImageListItem>
                <ImageListItem>
                  <img
                    src='https://www.marriedtoadventure.com/wp-content/uploads/2011/10/DSC_0912.jpg'
                    alt={''} />
                </ImageListItem>
                <ImageListItem>
                  <img
                    src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/lake-baikal-landscape-in-autumn-reflections-siberia-russia-olga-kamenskaya--natureplcom.jpg'
                    alt={''} />
                </ImageListItem>
              </ImageList>
          </div>
        </div>
    </div>
  )
}

export default Posts