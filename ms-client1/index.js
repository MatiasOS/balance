import Seneca from 'seneca'
import logger from 'seneca-demo-logger'

const tag   = 'grm-client'
const host  = '127.0.0.1'
const bases = [
  '127.0.0.1:39999'
]

const opts = {
  seneca : {
    tag,
    internal  : {logger : logger},
    debug     : {short_logs : true},
    transport : {
      web : {
        timeout : 20000
      }
    }
  },
  mesh   : {
    host,
    bases,
    sneeze : {
      silent : true
    }
  }
}

const seneca = Seneca(opts.seneca)

  .use('mesh', opts.mesh)

export default seneca