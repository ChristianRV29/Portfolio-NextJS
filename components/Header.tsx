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
                <div className={"col-md-4"}>
                    <Image src={uri} alt={'image-profile'} className={'img-fluid'} width={350} height={500}/>
                </div>
                <div className={"col-md-8"}>
                    <h1>Christian Riaño</h1>
                    <h3>Fullstack developer</h3>
                    <p className={'text-justify py-1'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id inventore voluptatibus voluptates ea, libero laborum consequuntur! Harum voluptate nihil minima modi non itaque expedita, nesciunt nobis perferendis vel quaerat tempora natus, rerum eveniet recusandae nam, optio quo qui dolorem dolore consequatur! Maxime odit fuga molestias labore. Culpa fugit impedit, architecto praesentium labore magni quia, illum dolorum fugiat, dolorem consectetur! Magnam amet odio nesciunt, dolor consequatur possimus aspernatur commodi, aliquam qui neque at distinctio corrupti eligendi. Magnam odit sed in facere nihil minima neque dolorum fuga odio amet fugit optio aut, repellendus commodi necessitatibus? Quis at, libero vero a nulla laboriosam tempora tenetur debitis cupiditate? Adipisci earum molestiae harum. Sapiente, eos! Voluptate, dolor mollitia! Ea magnam officia a aliquid error soluta sequi quo voluptatem inventore voluptates, provident, impedit odit excepturi ipsa eaque sint accusantium! Fugit commodi iusto numquam quae aperiam nemo, a repudiandae ratione voluptatibus? Culpa iste et asperiores amet repellendus repellat. Sunt vel, eum cumque nostrum incidunt ut minus officia? Doloremque, tempora doloribus enim autem libero minus, labore in itaque ab ea placeat illo, harum voluptas dignissimos esse. Ea dicta alias aut nisi temporibus nulla quisquam enim magni est voluptates excepturi obcaecati, vero pariatur facilis tempore, delectus voluptatem illum a!
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
