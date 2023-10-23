import Head from 'next/head'
import Image from 'next/image'

import { Layout } from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

import header_styles from '../styles/Header.module.scss'
import { ProjectCard } from '../components/ProjectCard'

export default function Home() {
  return (
    <Layout>
      <header className={header_styles.container}>
        <motion.div className={header_styles.left_side}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 1,
              delay: 0.3
          }} initial={{ opacity: 0, scale: 0.5 }}
        >
          <h1>Olá, eu sou <span>Deuzivan Lima</span></h1>
          <p>
            Anos experiência com computação, habilidades de segurança com servidores (Linux), criação de servidores, desenvolvimento de sites, criação de sotftwares, bots, API e etc.
          </p>
          <br/>
          <p>
            Autodidata e conhecimento amplo nas demais áreas de TI e capacidade de manutenção de sistemas (Linux, Android, Windows).
          </p>
        </motion.div>

        <motion.div className={header_styles.right_side}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.6,
              delay: 0.2
          }} initial={{ opacity: 0, scale: 0.5 }}
        >
          <Image
            src={'/logo-xnork.png'}
            width={300}
            height={300}
            alt={'Logo'}
            className={header_styles.logo}
            />
        </motion.div>
      </header>

      <h1 className={'title-sep'}>Currículo</h1>
      <div className='cv'>
        <article className='cv-container'>
          <h1>Cursos</h1>
          <ul>
            <li>TypeScript/JavaScript (Rocketseat/Udemy)</li>
            <li>C/C++ (Udemy)</li>
            <li>HTML, CSS (Udemy)</li>
            <li>Computação Básica (2014 - Presencial)</li>
          </ul>
        </article>
        <article className='cv-container'>
          <h1>Idiomas</h1>
          <ul>
            <li>Português (nativo)</li>
            <li>Inglês (cursando)</li>
          </ul>
        </article>
        <article className='cv-container'>
          <h1>Habili. Extras Curricular</h1>
          <ul>
            <li>Manutenção de Eletrônicos Digitais (Básico)</li>
            <li>Manutenção de OS (Linux, Windows, Android)</li>
            <li>Desenvolvedor Freelancer</li>
            <li>Editor de Fotos e Vídeos</li>
            <li>Criação de banners para anúncios</li>
          </ul>
        </article>
        <br/>
        <Link href='#' className='download'>Baixar PDF Completo</Link>
      </div>

      <h1 className={'title-sep'}>Projetos Reais</h1>
      <div className='grid-project'>
        <ProjectCard
          title={'Fhê Soares - Landing Page'}
          description={'Demostração de seus trabalhos como fotógrafo, expondo seu portfolio e mostrando o preço de seus serviços em seu site responsivo e cmopleto.'}
          key={0}
          images_path={[
            '/projects/fehsoares_001.png',
            '/projects/fehsoares_002.png',
            '/projects/fehsoares_003.png',
            '/projects/fehsoares_004.png'
          ]}
          link={'https://www.fehsoares.com.br'}
          />
        <ProjectCard
          title={'Anuncia Comigo - Landing Page'}
          description={'Site de apresentação de serviços objetivo, mostrando resultados e utilizando tecnologias modernas.'}
          key={1}
          images_path={[
            '/projects/anunciacomigo_001.png',
            '/projects/anunciacomigo_002.png',
            '/projects/anunciacomigo_003.png'
          ]}
          link={'https://anunciacomigo.com'}
        />
      </div>
      <h1 className={'title-sep'}>Projetos Pessoais</h1>
      <div className='grid-project'>
        <ProjectCard
            title={'Fazeli Wallet'}
            description={'Um teste meu trabalhando com Redux, Sqlite3 e brincando com sistema de transferência de "dinheiro" entre contas, simulando um "banco", projeto complexo.'}
            key={9}
            images_path={[
              '/projects/fazueli-wallet-001.png',
              '/projects/fazueli-wallet-002.png',
              '/projects/fazueli-wallet-003.png',
              '/projects/fazueli-wallet-004.png',
              '/projects/fazueli-wallet-005.png',
              '/projects/fazueli-wallet-006.png',
            ]}
            link={'https://github.com/Xnork/Fazueli-Wallet'}
          />
        <ProjectCard
            title={'NoobBank - Based on Nubank'}
            description={'Um front-end que simula como seria o banco de um hacker anônimo, com uma idealização de uso de blockchain e IP-F.'}
            key={2}
            images_path={[
              '/projects/noobank_001.png',
              '/projects/noobank_002.png'
            ]}
            link={'https://github.com/Xnork/NoobBank-Mobile-Layout'}
          />
        <ProjectCard
          title={'Rocket Simulator'}
          description={'Um software que usa equações de Issac Newton para descrever como a gravidade afetaria o foguete e os impulsos ao acelerar para diferentes ângulos.'}
          key={3}
          images_path={[
            '/projects/rocket_001.png',
            '/projects/rocket_002.png'
          ]}
          link={'https://github.com/Xnork/RocketSimulator'}
        />
        <ProjectCard
          title={'Meu Blog - Obsoleto'}
          description={'Um front-end responsivo de um idéia de blog que eu havia tentado fazer, já havia 2 posts, mas parei por conta de trabalhos externos.'}
          key={4}
          images_path={[
            '/projects/blog_001.png',
            '/projects/blog_002.png',
            '/projects/blog_003.png',
            '/projects/blog_004.png',
            '/projects/blog_005.png'
          ]}
          link={'https://github.com/Xnork/xnork-blog-site'}
        />
        <ProjectCard
          title={'Game de Plataforma - Base'}
          description={'Jogo simples, com geração de mundos aleatórios e colisão de tiles perfeita. Geração e seleção de blocos por camada são o núcleo desse projeto.'}
          key={5}
          images_path={[
            '/projects/platform_001.png',
            '/projects/platform_002.png',
            '/projects/platform_003.png'
          ]}
          link={'https://github.com/Xnork/SDL2-Platform-Game-Learning'}
        />
        <ProjectCard
          title={'The Last Earth'}
          description={'Um jogo incompleto, sem previsões para continuar. É uma base bem mais complexa que o SDL2-Platform, ele conta com sprites, geração de estruturas, destruição, seleção de itens, geração de mundo aleatório e muito mais. Esse projeto dediquei alguns dias, e no final acabei obtendo alguns aprendizados importantes.'}
          key={6}
          images_path={[
            '/projects/platform2_001.png',
            '/projects/platform2_002.png',
            '/projects/platform2_003.png',
            '/projects/platform2_004.png'
          ]}
          link={'https://github.com/Xnork/SDL2-The-Last-World-test'}
        />
        <ProjectCard
          title={'Particle System'}
          description={'Sistema de partículas em C++ baseado em um vídeo do DaFluffyPotato no YouTube. Conta com ajuste de Texturas Renderer e etc.'}
          key={7}
          images_path={[
            '/projects/particle_001.png',
            '/projects/particle_002.png',
            '/projects/particle_003.png'
          ]}
          link={'https://github.com/Xnork/SDL2-Particle-System'}
        />
        <ProjectCard
          title={'TMX Loader'}
          description={'Algorítimo que carrega um TMX gerado pelo Tiled, e com a equação de 1D -> 2D em um array 1D, ele caucula a posição das texturas e carrega, assim economizando memória.'}
          key={8}
          images_path={[
            '/projects/tileload_001.png',
            '/projects/tileload_002.png',
            '/projects/tileload_003.png',
            '/projects/tileload_004.png'
          ]}
          link={'https://github.com/Xnork/SDL2-Particle-System'}
        />
      </div>
    </Layout>
  )
}
