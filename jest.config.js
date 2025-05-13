module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/$1'
    },
    transform: {
      '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './.babelrc' }],
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(react|next)/)'
    ]
  };