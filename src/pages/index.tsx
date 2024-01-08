import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Search.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { searchSpotify } from '../../services/filaddServices';
import { comic_neue_title, roboto } from '@/styles/font';

interface Album {
  name: string;
  artists: { name: string }[];
  images: { url: string}[];
  id:string;
}

export default function Home() {
  const [result, setResult] = useState<Album[]>([]) ;
  const [error, setError] = useState(false) ;

  const search = async (e: any) =>{
    e.preventDefault()
    const searchText = e.target.search.value
    const dataAlbums = await searchSpotify(searchText)

    if (dataAlbums) {
      setResult(dataAlbums.albums.items)
    }else{
      setError(true)
    }
  }

  return (
    <>
      <Head>
        <title>Filadd Music - Search</title>
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={`${styles.title} ${comic_neue_title.className}`}>
          Filadd Music
        </h1>
        <form onSubmit={(e) => search(e)} className={`${styles.search}`}>
        

              <div className={`${styles.inputSearch}`}>
                <input type='search' name='search' placeholder='Search Album' autoComplete='off' className={`${styles.inputText} ${roboto.className}`} />
              </div>
              {result.length > 0 ?
            <>
              <div className={`${styles.results}`}>
       
              {result?.map((album, index) => (
                <div key={index} className={`${styles.album}`} title={album.name}>
                  <Link href={album.id}>
                    <div className={`${styles["album-details"]} ${comic_neue_title.className}`}>
                      <h3 className={`${styles["album-name"]} ${comic_neue_title.className}`}>
                        {album.name}
                      </h3>
                      <p>{album.artists[0].name}</p>
                    </div>
                    <Image
                      className={`${styles["album-img"]}`}
                      src={album.images[0].url}
                      alt={album.name}
                      fill
                    />
                  </Link>
                </div>
                ))}
              </div>
            </>
            : 
            error && 
            <h1 className={`${styles.title} ${comic_neue_title.className}`}>
              Ocurrió un error, verifique el token
            </h1>}
        </form>
      </main>
    </>
  )
}
