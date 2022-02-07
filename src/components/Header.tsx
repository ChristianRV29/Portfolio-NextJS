import React, { Fragment } from 'react'
import Image from 'next/image';

interface HeaderProps {
  uri: string
}

const HeaderCard: React.FC<HeaderProps> = props => {
  const { uri } = props
  return (
    <Fragment>
      <header className={'row'}>
        <div className={'col-md-12'}>
            <div className={'card card-body bg-secondary text-light'}>
             <div className={"row"}>
                <div className={"col-md-3"}>
                    <Image src={uri} alt={'image-profile'} className={'img-fluid'} width={300} height={300}/>
                </div>
                <div className={"col-md-9"}>
                    <h1>Christian Riaño</h1>
                    <h3>Fullstack developer</h3>
                    <p className={'text-justify py-1'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus quidem nostrum ipsa ut praesentium quasi quod nemo. Corporis architecto inventore provident dignissimos neque, placeat, expedita sed quam debitis, aspernatur temporibus magni voluptatem voluptatum. Placeat architecto hic odio, facilis animi a quis obcaecati vero esse voluptatibus culpa, odit maiores quam commodi possimus dolores, neque ratione? Molestiae, nulla quidem sapiente ipsum laborum, eligendi itaque cumque neque odio facilis, enim doloremque. Temporibus iste nisi commodi. Nam in neque animi ea quis quos, corrupti dicta sapiente mollitia recusandae quia exercitationem iusto, inventore nisi asperiores illum est placeat doloribus, facere fugiat voluptas quisquam aut. Qui, in eligendi fugit cupiditate vero dolore impedit. Numquam, reprehenderit nostrum incidunt recusandae voluptatibus facere dicta sequi corporis deleniti sint!
                    </p>
                </div>
             </div>
            </div>
        </div>
      </header>
    </Fragment>
  )
}

export default HeaderCard
