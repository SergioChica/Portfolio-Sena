import React from 'react'
import { Main } from '../../Layouts/Main/Main';
import { TitleCover } from '../../TitleCover/TitleCover';
import { Proyects } from '../../Proyects/Proyects';
import { References } from '../../References/References';
import { Experience } from '../../Experience/Experience';


import error  from '../../../assets/404.jpg'
import java from '../../../assets/logojava.png'
import python from '../../../assets/logopython.png'
import javascript from '../../../assets/logojs.png'
import mysql from '../../../assets/logomysql.jpg'




export const Home = () => {
  return (
    <>
    <Main>
      <section className='firstSection'>
      <TitleCover title='PERFIL' />
      <div className='containerFirstSection'>
      <div className='TextFirstSection'>
      <p className='textOne'>Soy un estudiante resolutivo y proactivo que le gusta aprender cada vez más sobre el mundo del software, enfocandome en ser Fullstack para tener mas conocimientos sobre la mayoria de campos que abarque la industria del software.</p>
      <p className='textSecond'>ACTUALMENTE ESTOY REALIZANDO UN TECNOLOGO SOBRE DESARROLLO DE SOFTWARE Y A LA MISMA VEZ APRENDIENDO MAS MEDIANTE CURSOS.</p>
      <div className='textThreeAndTextFour'>
        <p className='textThree'>Si quieres ponerte en contacto conmigo escribeme en</p>
        <p className='textFour'>sergioanjaci@gmail.com</p>
      </div>
      </div>
      </div>
      </section>
      <section className='secondSection'>
      <TitleCover title='PROYECTOS' />
      <div className='containerSecondSection'>
        <div className='TextSecondSection'>
        <Proyects img={error} title='Pinterbot' desc='Bot para escoger una imagen aleatoria de pinterest y descargarla' />
        <Proyects img={error} title='Pinterbot' desc='Bot para escoger una imagen aleatoria de pinterest y descargarla' />
        <Proyects img={error} title='Pinterbot' desc='Bot para escoger una imagen aleatoria de pinterest y descargarla' />
        <Proyects img={error} title='Pinterbot' desc='Bot para escoger una imagen aleatoria de pinterest y descargarla' />
        </div>
      </div>
      </section>
      <section className='threeSection'>
      <TitleCover title='REFERENCIAS' />
      <div className='containerThreeSection'>
        <div className='TextThreeSection'>
        <References name='Hola' charge='Developer' phone='31212289' email='sergioanjaci' />
        <References name='' />
        <References name='' />
        </div>
      </div>
      </section>
      <section className='threeSection'>
      <TitleCover title='EXPERIENCIA' />
      <div className='containerThreeSection'>
        <div className='TextThreeSection'>
        <Experience img={java} text='Bases' progress='50' />
        <Experience img={python} text='Bases' progress='50' />
        <Experience img={javascript} text='Intermedio' progress='70' />
        <Experience img={mysql} text='Intermedio' progress='70' />
        </div>
      </div>
      </section>
    </Main>
    </>
  )
}
