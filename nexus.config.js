module.exports = {
  apps: [
    {
      name: "nexus-clinic-malaysia",

      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",

      instances: "max",
      exec_mode: "cluster",

      autorestart: true,
      watch: false,

      max_memory_restart: "500M",

      env: {
        NODE_ENV: "production"
      }
    }
  ]
};


