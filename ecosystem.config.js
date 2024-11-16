module.exports = {
    apps: [{
      name: "bizix-portal-apps",
      script: "yarn",
      args: "start",
      cwd: "/home/bizix/apps",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "2G"
    }]
  }