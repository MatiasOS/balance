/**
 * @module
 */
import Seneca from 'seneca'
import dotenv from 'dotenv'
import logger from 'seneca-demo-logger'
import async from 'async'

dotenv.config()

if (!process.env.BOILER_TAG ||
  !process.env.BOILER_HOST ||
  !process.env.BOILER_BASES ||
  !process.env.BOILER_MONGO_URI ||
  !process.env.BOILER_REDIS_TIMEOUT) {
  console.log(`You must set:
        BOILER_HOST 
        BOILER_BASES 
        BOILER_MONGO_URI 
        BOILER_REDIS_TIMEOUT `)

  process.exit(-1)
}
const tag = process.env.BOILER_TAG
const dbname = process.env.BOILER_TAG
const host = process.env.BOILER_HOST
const bases = process.env.BOILER_BASES.split(',')
const mongoUri = `${process.env.BOILER_MONGO_URI}/${dbname}`
const timeout = process.env.BOILER_TIMEOUT || 20000
const silent = process.env.NODE_ENV === 'production'

const pin = `role:${tag}`

const opts = {
  seneca: {
    tag: tag,
    internal: {logger: logger},
    debug: {short_logs: true},
    transport: {
      web: {
        timeout
      }
    }
  },
  mesh: {
    pin,
    bases,
    host,
    sneeze: {
      silent
    }
  },
  mongo: {
    uri: mongoUri
  }
}

Seneca(opts.seneca)
  .use('mesh', opts.mesh)
  .ready( () => {
    console.log(this.id)
    this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
      (err, result) => {
        console.log(result.data)
        this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
          (err, result) => {
            console.log(result.data)
            this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
              (err, result) => {
                console.log(result.data)
                this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
                  (err, result) => {
                    console.log(result.data)
                    this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
                      (err, result) => {
                        console.log(result.data)
                        this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
                          (err, result) => {
                            console.log(result.data)
                            this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
                              (err, result) => {
                                console.log(result.data)
                                this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
                                  (err, result) => {
                                    console.log(result.data)
                                    this.act({role: 'ms-worker', cmd: 'process', target: 'msg'},
                                      (err, result) => {
                                        console.log(result.data)

                                      })
                                  })
                              })
                          })
                      })
                  })
              })
          })
      })
  })


