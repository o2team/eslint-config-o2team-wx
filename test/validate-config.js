import fs from 'fs'
import path from 'path'
import test from 'ava'
import eslint from 'eslint'

const CLIEngine = eslint.CLIEngine
const files = {}

// read all files in folder rules
fs.readdirSync(path.join(__dirname, '../rules')).forEach(name => {
  files[name] = require(`../rules/${name}`)
})

// the repo file to test lint
const repoFiles = [
  'index.js',
  'test/*.js'
]

Object.keys(files).forEach(name => {
  const config = files[name]

  test(`validate all rule syntax in [ ${name} ]`, t => {
    const cli = new CLIEngine({
      envs: ['node', 'es6'],
      parserOptions: {
        sourceType: 'module'
      },
      useEslintrc: false,
      rules: config.rules
    })

    const formatter = cli.getFormatter()
    const report = cli.executeOnFiles(repoFiles)

    if (report.errorCount) {
      console.log(formatter(report.results))
    }

    t.is(report.errorCount, 0)
  })
})
