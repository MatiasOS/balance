/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai'

import seneca from 'seneca'
import logic from '../../lib/logic'
import dotenv from 'dotenv'
dotenv.config()

const tag = 'b-boilerplate'
const pin = `role:${tag}`

const opts = {
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/b-boilerplate'
  }
}

function testSeneca (done) {
  return seneca({log: 'test'})
    .test(done)
    .use('entity')
    .use('basic')
    .use('mongo-store', opts.mongo)
    .use(logic, {
      printFunction: () => {
      },
      pin
    }) // No printing
}

describe('Integration Test find', function () {
  describe(`{cmd: 'process', target: 'msg'}`, function () {
    it('should return an array', (done) => {
      const senecaApp = testSeneca(done)
      senecaApp.act({cmd: 'process', target: 'msg'},
        (err, result) => {
          if (err) done(err)
          expect(result.ok).to.be.ok
          expect(result.data).to.have.property('solvedBy')
          done()
        })
    })
  })
})
