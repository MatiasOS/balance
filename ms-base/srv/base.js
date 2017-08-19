import Seneca from 'seneca'
import logger from 'seneca-demo-logger'
import dotenv from 'dotenv'

const tag = 'mesh'

dotenv.config()

if (!process.env.SENECA_BASE_HOST) {

  console.log(`You must set: SENECA_BASE_HOST`)

  process.exit(-1)
}

const host    = process.env.SENECA_BASE_HOST
const port    = process.env.SENECA_BASE_PORT || process.argv[2] || 39999
const timeout = process.env.SENECA_BASE_TIMEOUT
const bases   = process.env.SENECA_BASE_BASES || [`${host}:${port}`]
const silent  = process.env.NODE_ENV === 'production'

const opts = {
  seneca : {
    tag       : tag,
    internal  : {logger : logger},
    debug     : {short_logs : true},
    transport : {
      web : {
        timeout
      }
    }
  }
  ,
  mesh   : {
    isbase  : true,
    port,
    host,
    bases,
    pin     : `role:${tag}`,
    monitor : true,
    sneeze  : {
      silent
    }
  }
}

Seneca(opts.seneca)
  .use('mesh', opts.mesh)
  .ready(function () {
    console.log(this.id)
  })
