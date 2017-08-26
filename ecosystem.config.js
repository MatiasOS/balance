module.exports = {
  apps: [{
    name: 'ms-base',
    script: './ms-base/build/srv/service.js',
    watch: true,
    env: {
      NODE_ENV: 'development',
      SENECA_BASE_HOST: '127.0.0.1',
      SENECA_BASE_PORT: 39999,
      SENECA_BASE_TIMEOUT: 20000
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
    {
      name: 'ms-client',
      script: './ms-client/build/srv/service.js',
      watch: true,
      env: {
        BOILER_TAG: 'client',
        BOILER_HOST: '127.0.0.1',
        BOILER_BASES: '127.0.0.1:39999',
        BOILER_MONGO_URI: 'mongodb://127.0.0.1:27017',
        BOILER_REDIS_TIMEOUT: 300,
        BOILER_TIMEOUT: 20000
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'ms-worker1',
      script: './ms-worker1/build/srv/service.js',
      watch: true,
      env: {
        BOILER_TAG: 'worker1',
        BOILER_HOST: '127.0.0.1',
        BOILER_BASES: '127.0.0.1:39999',
        BOILER_MONGO_URI: 'mongodb://127.0.0.1:27017',
        BOILER_REDIS_TIMEOUT: 300,
        BOILER_TIMEOUT: 20000
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    local: {
      host:'localhost',
      ref:'origin/master',
      repo:'git@github.com:bons/b-flow.git',
      path:'/deploy/local',
      'pre-deploy':'git fetch --all',
      'post-deploy':'nvm use && sh install.sh --silent && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
