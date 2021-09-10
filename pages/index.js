import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const human = new HumanAPI("myWidget");
    human.send("timeline.pause");
    human.send("timeline.play"); 
    human.send("camera.orbit", { yaw: 90 });
    // (function rotateCamera() {
    //   requestAnimationFrame(rotateCamera);
    //   human.send("camera.orbit", { yaw: 0.4 });
    // })();
    human.send("camera.set", {
      position: { z: 0 },
      animate: true
    });
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://developer.biodigital.com/builds/api/2/human-api.min.js" />
      </Head>

      <main className={styles.main}>
        <iframe id="myWidget" className='iframe'
            src="https://human.biodigital.com/viewer/?be=4SRK&ui-info=true&ui-search=true&ui-undo=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&ui-loader=circle&ui-whiteboard=true&ui-layers=true&ui-anatomy-labels=true&disable-scroll=false&dk=b42e46ea193a7a6b233382ff65a20ae4835a43a6"
            width="100%"
            height="100%">
        </iframe>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
