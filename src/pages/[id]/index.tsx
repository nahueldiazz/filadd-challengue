import styles from '@/styles/Search.module.css'
import Image from 'next/image'
import { getIdAlbum } from "../../../services/filaddServices";
import { comic_neue_title } from "@/styles/font";
import { IdAlbumTypes, TracksTypes } from './types';

const IdAlbum = ({ idResponse }:IdAlbumTypes) => {

    return (
        idResponse ?
                <div className={`${styles.idAlbum} ${comic_neue_title.className}`}>
                    <div>
                        <p style={{fontWeight:'bold', fontSize: '32px'}}>{idResponse?.name}</p>
                        <p style={{fontSize: '25px'}}>{idResponse?.artists?.length > 0 && idResponse.artists[0].name}</p>
                    </div>

                    <div className={`${styles.descriptionAlbum}`}>
                        <div>
                       { idResponse?.images?.length > 0 && <Image src={idResponse?.images[0]?.url} alt='unalt' width={idResponse?.images[0]?.width} height={idResponse?.images[0]?.height}/>}
                        </div>
                        <div className={`${styles.tracks}`}>
                        {
                            idResponse.tracks?.items?.map((track, index) =>(
                                <div className={`${styles.decriptionAlbumId} ${(index + 1) % 2 !== 0 && styles.backgroundGrey}`} >
                                    <div className={`${styles.numberTrack}`}>
                                        {index + 1}
                                    </div>
                                    <div className={`${styles.itemsTracks}`}>
                                        <p style={{fontWeight:'bold', fontSize: '16px'}}>{track.name}</p>
                                        <p style={{fontSize: '16px'}}>{track.artists[0].name}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            : <h1>el Id del album no existe</h1>
    )
}

export async function getServerSideProps(context: any) {
  try {
      const { params } = context; 
      const { id } = params; 
  
      const idResponse : IdAlbumTypes = await getIdAlbum(id) || null
  
      return {
          props: {
            idResponse
          },
        };
  } catch (error) {
    console.error('Error fetching todo:', error);
  }
}


export default IdAlbum