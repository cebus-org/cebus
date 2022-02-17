import path from 'path';
import fs from 'fs';
import {
  apiExtractorUpdateTask,
  apiExtractorVerifyTask,
  eslintTask,
  addResolvePath,
  cleanTask,
  jestTask,
  series,
  task,
  tscTask,
  tscWatchTask,
} from 'just-scripts';

export function preset() {
  const jestOptions = {
    config: path.join(__dirname, 'jest.config.js'),
    rootDir: process.cwd(),
  };

  task('test', jestTask(jestOptions)).cached?.();
  task('test:watch', jestTask({ ...jestOptions, watch: true })).cached?.();
}
