import path from 'path';
import { jestTask, series, cleanTask, addResolvePath, tscTask, task } from 'just-scripts';

export function preset() {
  addResolvePath(__dirname);

  const libCommonPath = path.resolve(process.cwd(), 'lib-commonjs');
  const libPath = path.resolve(process.cwd(), 'lib');
  const srcPath = path.resolve(process.cwd(), 'src');

  const tscCommonOptions = {
    sourceRoot: path.relative(libCommonPath, srcPath),
    rootDir: srcPath,
    module: 'commonjs',
    outDir: libCommonPath,
  };
  const tscOptions = {
    sourceRoot: path.relative(libPath, srcPath),
    rootDir: srcPath,
    outDir: libPath,
  };

  const jestOptions = {
    config: path.join(__dirname, 'jest.config.js'),
    rootDir: process.cwd(),
  };

  task('clean', cleanTask());

  task('tsCommon', tscTask(tscCommonOptions));

  task('ts', tscTask(tscOptions));

  task('build', series('clean', 'ts', 'tsCommon')).cached?.();

  task('test', jestTask(jestOptions));
}
