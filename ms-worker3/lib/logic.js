import {microservice as ms} from 'microservice-helper'
import * as process from './pipes/process'

export default function logic () {
  let seneca = this

  seneca.add('{cmd:process, target:msg}', ms.doFn(process.msg))
}
