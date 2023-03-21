import Cabin from 'cabin';
import Graceful from '@ladjs/graceful';
import Bree from 'bree';

const bree = new Bree({
  logger: new Cabin(),
  jobs: [
    {
      name: 'gen-certs.mjs',
      // interval: '1m',
      interval: '5s'
    }
  ]
})

const graceful = new Graceful({ brees: [bree] });
graceful.listen();

(async () => {
  await bree.start();
})();
