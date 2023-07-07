import Image from 'next/image'
import styles from './style.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const ProjectCard = ({images_path, title, description, key, link}) => {
  const [current_image_index, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timerId = setInterval(()=> {
      current_image_index < images_path.length - 1 ?
        setCurrentImageIndex(current_image_index + 1) :
        setCurrentImageIndex(0)
    }, 1500);
    return () => clearInterval(timerId);
  }, [current_image_index, images_path.length]);

  return (
    <motion.div 
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.6,
            delay: 0.2
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}

        className={styles.container}
    >
      <Image
        src={images_path[current_image_index]}
        width={400}
        height={400}
        alt={'Project Banner'}
        key={key}
        className={styles.banner}
      />
      <article>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </article>

      <Link href={link} className={styles.link_button}>visualizar</Link>
    </motion.div>
  )
}
