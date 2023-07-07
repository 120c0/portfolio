import Head from 'next/head'
import styles from './style.module.scss'
import { ActionBar } from '../ActionBar'

export const Layout = ({children, title, style}) => {
  return (
    <div className={`${styles.container} ${style}`}>
      <Head>
        <title>{title ? title : 'Xnork\'s Hub'}</title>
        <meta name='description' content='Porfolio de Deuzivan Lima 47dcdd724002ddbce78ba0891d54c255' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <ActionBar/>

        { children }
      </main>

      <footer className='end-site'>
        © 2023 Deuzivan Lima Viana
      </footer>
    </div>
  )
}
