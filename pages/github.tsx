import type { GetServerSidePropsContext, NextPage } from 'next'
import Image from 'next/image'

import { GithubResponse } from '~src/@types/github'
import Layout from '~src/components/Layout'

interface GithubPageProps {
  user: GithubResponse | undefined
}

const Github: NextPage<GithubPageProps> = ({ user }) => {
  console.log(user?.avatar_url)
  return (
    <Layout footer={false}>
      <div className={'row'}>
        <div className={'col-md-4 offset-md-4'}>
          <div className={'card card-body text-center'}>
            <h1>{user!.name}</h1>
            <Image
              loader={() => user!.avatar_url}
              src={user!.avatar_url}
              width={250}
              height={250}
              alt={"Github profile's image"}
            />
            <p>{user!.bio}</p>
            <b>{user!.company}</b>
            <a href={user!.html_url} className={'btn btn-outline-secondary my-3'} > Go to github profile</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch('https://api.github.com/users/ChristianRV29')
  const data: GithubResponse = await res.json()

  return {
    props: {
      user: data,
    },
  }
}

export default Github
