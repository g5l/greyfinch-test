module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    "~@/(.*)": "<rootDir>/src/$1",
    // "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babel: true,
      tsConfig: 'tsconfig.json',
    }]
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}'
  ]
};