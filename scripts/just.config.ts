import path from 'path';
import fs from 'fs';
import {
  jestTask,
  series,
  cleanTask,
  addResolvePath,
  apiExtractorVerifyTask,
  apiExtractorUpdateTask,
  tscTask,
  task,
} from 'just-scripts';

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

  const apiExtractorOptions = {
    projectFolder: process.cwd(),
    configJsonFilePath: fs.existsSync(path.resolve(process.cwd(), 'api-extractor.json'))
      ? path.resolve(process.cwd(), 'api-extractor.json')
      : path.resolve(__dirname, 'api-extractor.base.json'),
  };

  // Clean
  task('clean', cleanTask());

  // Typescript Build
  task('tsCommon', tscTask(tscCommonOptions));
  task('ts', tscTask(tscOptions));

  // API Verify
  task('extract-api', apiExtractorVerifyTask(apiExtractorOptions));
  task('extract-api:fix', apiExtractorUpdateTask(apiExtractorOptions));

  // Build
  task('build', series('clean', 'ts', 'tsCommon', 'extract-api:fix')).cached?.();

  // Test
  task('test', jestTask(jestOptions));
}
