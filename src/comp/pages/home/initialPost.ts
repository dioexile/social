import { IPost } from "../../../types"

export const initialPost: IPost[] = [{
    author:{
      _id: '1',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLTdh4vj3oGXpCXT3lMqha9_Qq4-JvMBlpztnHvi_mI=s900-c-k-c0x00ffffff-no-rj',
      name:'National Geographic'
    },
    content: 'Golden autumn in Siberia',
    createdAt: new Date().toString(),
    images: [
      'https://previews.123rf.com/images/muzhik/muzhik1303/muzhik130300050/18342954-.jpg',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07c189e6-cd61-4640-9577-ddcbb1c60226/d4bbuc4-868b7ea0-10e6-4812-85e6-80c9d6c87680.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3YzE4OWU2LWNkNjEtNDY0MC05NTc3LWRkY2JiMWM2MDIyNlwvZDRiYnVjNC04NjhiN2VhMC0xMGU2LTQ4MTItODVlNi04MGM5ZDZjODc2ODAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.69SCmt3TTCBvagaDA4yjrsP7C_DMMoTeNK0cVfolwjo',
      'https://www.marriedtoadventure.com/wp-content/uploads/2011/10/DSC_0912.jpg',
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/lake-baikal-landscape-in-autumn-reflections-siberia-russia-olga-kamenskaya--natureplcom.jpg'
    ]
  }]
