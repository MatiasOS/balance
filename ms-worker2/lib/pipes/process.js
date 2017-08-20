/**
 * @module
 */
import { processMsg } from './filters/process'

export function msg ($pipe, $critical, state) {
  return $pipe(processMsg, state, $critical)
    .return('solvedBy')
}
