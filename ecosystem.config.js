module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'npm',
      args: 'run dev',
      cwd: './frontend',
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'backend',
      script: 'uvicorn',
      args: 'main:app --host 0.0.0.0 --port 8000 --reload',
      cwd: './backend',
      env: {
        PYTHONUNBUFFERED: 'true',
      },
    },
  ],
};
