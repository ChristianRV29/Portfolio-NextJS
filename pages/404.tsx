import { NextPage } from 'next'
import Link from 'next/link'

import Layout from './../components/Layout'

const Custom404: NextPage = () => {
  return (
    <Layout>
      <div className={'d-flex align-center'}>
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions py-2">
                <Link href={'/'}>
                  <a className="btn btn-primary btn-lg">
                    <span className="glyphicon glyphicon-home" />
                    Take Me Home{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Custom404
