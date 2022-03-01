import type { GetServerSidePropsContext, NextPage } from 'next'

import { GithubResponse } from '~src/@types/github';
import Layout from '~src/components/Layout';

interface GithubPageProps {
  user: GithubPageProps | undefined;
}

const Github: NextPage<GithubPageProps> = ({ user }) => {

  return (
    <Layout>
        <div>
            <h1>Github page</h1>
        </div>
    </Layout>
  );
}

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const res = await fetch('https://api.github.com/users/ChristianRV29')
  const data: GithubResponse = await res.json();

  return {
    props: {
      user: data,
    }
  }
}

export default Github
