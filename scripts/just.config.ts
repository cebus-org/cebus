import path from 'path';
import { jestTask, addResolvePath, task } from 'just-scripts';

export function preset() {
  addResolvePath(__dirname);

  const jestOptions = {
    config: path.join(__dirname, 'jest.config.js'),
    rootDir: process.cwd(),
  };

  task('test', jestTask(jestOptions));
}
