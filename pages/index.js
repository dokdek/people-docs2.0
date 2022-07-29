import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from './components/search-bar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>People Docs 2.0</title>
        <meta name="description" content="People Docs 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold">
        People Docs 2.0
      </h1>
      <div>
        <SearchBar header="ID" name="search" placeholder="Search"/>
        <SearchBar header="Stamped Number" name="search" placeholder="Search"/>
        <SearchBar header="PType" name="search" placeholder="Search"/>
        <SearchBar header="Subtype" name="search" placeholder="Search"/>
        <SearchBar header="Title" name="search" placeholder="Search"/>
        </div>
    </div>
  )
}
