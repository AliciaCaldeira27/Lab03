import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',        // Usar o ts-jest para compilar os testes TypeScript
  testEnvironment: 'node',  // Definir o ambiente de teste para Node.js
};

export default config;