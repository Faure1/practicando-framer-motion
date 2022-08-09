import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Button,Container,Row } from 'react-bootstrap'


export default function Home() {
  return (
    <>
    <main>
      <Container>
        <Row>
          <div className='col-12 d-flex justify-content-center'>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5,x:900 }}
            animate={{ opacity: 1, scale: 1,x:0 }}
            transition={{ duration: 1 }}>
              Proyecto de geografia
              </motion.h1>
          </div>
        </Row>
        <Row>
          <div className='col-12 d-flex justify-content-center align-items-center col-lg-6'>
            <div>
              <motion.h1
              initial={{ opacity: 0, scale: 0.5,rotate:100 }}
              whileInView={{opacity:1,scale:1,rotate:0}}
              viewport={{once:false}}
              transition={{ duration: 1 }}
              className='text-center'>Lorem</motion.h1>
              <motion.p
              initial={{ opacity: 0, scale: 0.5,rotate:100 }}
              whileInView={{opacity:1,scale:1,rotate:0}}
              viewport={{once:false}}
              transition={{ duration: 1 }}
              className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus lacus magna, sit amet facilisis est volutpat ut. Aliquam erat volutpat. Donec ac lacus at est lobortis lobortis quis eu risus. Nulla eu dui tortor. Proin lacus leo, efficitur sed magna sed, efficitur lacinia ligula. Etiam suscipit nibh nulla, nec vulputate leo pulvinar sit amet. Aenean interdum mattis vestibulum.</motion.p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center align-items-center col-lg-6'>
            <motion.img
              initial={{ opacity: 0, scale: 0.5,x:600}}
              whileInView={{opacity:1,scale:1,x:100}}
              viewport={{once:false}}
              transition={{ duration: 6 }}

              alt='pez'
              src='/pez.png'
              width={375}
              height={150}
              layout='intrinsic'
              >
              </motion.img>
          </div>
        </Row>
      </Container>
    </main>
    </>
  )
}
