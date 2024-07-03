import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    'src/**/*.ts', 
    '!src/**/spec.ts',
    'src/**/*.tsx', 
    '!src/**/spec.tsx'
  ],
};

export default config;
