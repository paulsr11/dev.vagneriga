module.exports = {
  apps: [
    {
      name: 'dev2-frontend',
      cwd: '/var/www/dev2.vagneriga.lv',
      script: 'node_modules/.bin/next',
      args: 'start -p 3002',
      interpreter: 'none',
      env: { NODE_ENV: 'production' },
    },
  ],
};
