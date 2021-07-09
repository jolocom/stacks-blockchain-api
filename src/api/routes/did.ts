import * as express from 'express';
import { addAsync, RouterWithAsync } from '@awaitjs/express';
import { getResolver } from '@stacks/did-resolver/js';
import { ChainID } from '@stacks/transactions';
import { GetStacksNetwork } from './../../bns-helpers';

export function createDIDRouter(chainId: ChainID): RouterWithAsync {
  const router = addAsync(express.Router());
  const stacksNetwork = GetStacksNetwork(chainId)

  router.getAsync('/:did', async (req, res) => {
    const resolve = getResolver(stacksNetwork)
    const did = req.params['did'];
    return resolve(did)
      .then(res.json.bind(res))
      .catch((e: Error) => res.status(400).json({
        error: e.message
      }))
  })

  return router;
}

