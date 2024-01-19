/** @satisfies {import('@webcontainer/api').FileSystemTree} */
export const smartContractTemplate = {
  '*eslintrc*cjs': {
    file: {
      contents:
        "module.exports = {\n  root: true,\n  env: {\n    browser: true,\n    node: true,\n    jest: true,\n  },\n  extends: ['eslint:recommended', 'plugin:o1js/recommended'],\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    ecmaVersion: 'latest',\n  },\n  plugins: ['@typescript-eslint', 'o1js'],\n  rules: {},\n};\n",
    },
  },
  '*gitattributes': {
    file: {
      contents:
        '# Use line endings appropriate for the system. This prevents Git from\n# complaining about project template line endings when committing on Windows.\n* text=auto eol=lf\n',
    },
  },
  '*gitignore': {
    file: {
      contents:
        '# NodeJS\nnode_modules\nbuild\ncoverage\n\n# Editor\n.vscode\n\n# System\n.DS_Store\n\n# Never commit keys to Git!\nkeys\n',
    },
  },
  '*npmignore': {
    file: {
      contents:
        '# TypeScript files\nsrc\n\n# Editor\n.vscode\n\n# System\n.DS_Store\n',
    },
  },
  '*prettierignore': {
    file: {
      contents:
        '# NodeJS\nnode_modules\nbuild\ncoverage\n.husky\n\n# Editor\n.vscode\n\n# System\n.DS_Store\n\n# Misc\nLICENSE\n',
    },
  },
  '*prettierrc': {
    file: {
      contents:
        '{\n  "semi": true,\n  "singleQuote": true,\n  "tabWidth": 2,\n  "trailingComma": "es5"\n}\n',
    },
  },
  LICENSE: {
    file: {
      contents:
        '                              Apache License\n                        Version 2.0, January 2004\n                     http://www.apache.org/licenses/\n\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\n\n1. Definitions.\n\n   "License" shall mean the terms and conditions for use, reproduction,\n   and distribution as defined by Sections 1 through 9 of this document.\n\n   "Licensor" shall mean the copyright owner or entity authorized by\n   the copyright owner that is granting the License.\n\n   "Legal Entity" shall mean the union of the acting entity and all\n   other entities that control, are controlled by, or are under common\n   control with that entity. For the purposes of this definition,\n   "control" means (i) the power, direct or indirect, to cause the\n   direction or management of such entity, whether by contract or\n   otherwise, or (ii) ownership of fifty percent (50%) or more of the\n   outstanding shares, or (iii) beneficial ownership of such entity.\n\n   "You" (or "Your") shall mean an individual or Legal Entity\n   exercising permissions granted by this License.\n\n   "Source" form shall mean the preferred form for making modifications,\n   including but not limited to software source code, documentation\n   source, and configuration files.\n\n   "Object" form shall mean any form resulting from mechanical\n   transformation or translation of a Source form, including but\n   not limited to compiled object code, generated documentation,\n   and conversions to other media types.\n\n   "Work" shall mean the work of authorship, whether in Source or\n   Object form, made available under the License, as indicated by a\n   copyright notice that is included in or attached to the work\n   (an example is provided in the Appendix below).\n\n   "Derivative Works" shall mean any work, whether in Source or Object\n   form, that is based on (or derived from) the Work and for which the\n   editorial revisions, annotations, elaborations, or other modifications\n   represent, as a whole, an original work of authorship. For the purposes\n   of this License, Derivative Works shall not include works that remain\n   separable from, or merely link (or bind by name) to the interfaces of,\n   the Work and Derivative Works thereof.\n\n   "Contribution" shall mean any work of authorship, including\n   the original version of the Work and any modifications or additions\n   to that Work or Derivative Works thereof, that is intentionally\n   submitted to Licensor for inclusion in the Work by the copyright owner\n   or by an individual or Legal Entity authorized to submit on behalf of\n   the copyright owner. For the purposes of this definition, "submitted"\n   means any form of electronic, verbal, or written communication sent\n   to the Licensor or its representatives, including but not limited to\n   communication on electronic mailing lists, source code control systems,\n   and issue tracking systems that are managed by, or on behalf of, the\n   Licensor for the purpose of discussing and improving the Work, but\n   excluding communication that is conspicuously marked or otherwise\n   designated in writing by the copyright owner as "Not a Contribution."\n\n   "Contributor" shall mean Licensor and any individual or Legal Entity\n   on behalf of whom a Contribution has been received by Licensor and\n   subsequently incorporated within the Work.\n\n2. Grant of Copyright License. Subject to the terms and conditions of\n   this License, each Contributor hereby grants to You a perpetual,\n   worldwide, non-exclusive, no-charge, royalty-free, irrevocable\n   copyright license to reproduce, prepare Derivative Works of,\n   publicly display, publicly perform, sublicense, and distribute the\n   Work and such Derivative Works in Source or Object form.\n\n3. Grant of Patent License. Subject to the terms and conditions of\n   this License, each Contributor hereby grants to You a perpetual,\n   worldwide, non-exclusive, no-charge, royalty-free, irrevocable\n   (except as stated in this section) patent license to make, have made,\n   use, offer to sell, sell, import, and otherwise transfer the Work,\n   where such license applies only to those patent claims licensable\n   by such Contributor that are necessarily infringed by their\n   Contribution(s) alone or by combination of their Contribution(s)\n   with the Work to which such Contribution(s) was submitted. If You\n   institute patent litigation against any entity (including a\n   cross-claim or counterclaim in a lawsuit) alleging that the Work\n   or a Contribution incorporated within the Work constitutes direct\n   or contributory patent infringement, then any patent licenses\n   granted to You under this License for that Work shall terminate\n   as of the date such litigation is filed.\n\n4. Redistribution. You may reproduce and distribute copies of the\n   Work or Derivative Works thereof in any medium, with or without\n   modifications, and in Source or Object form, provided that You\n   meet the following conditions:\n\n   (a) You must give any other recipients of the Work or\n       Derivative Works a copy of this License; and\n\n   (b) You must cause any modified files to carry prominent notices\n       stating that You changed the files; and\n\n   (c) You must retain, in the Source form of any Derivative Works\n       that You distribute, all copyright, patent, trademark, and\n       attribution notices from the Source form of the Work,\n       excluding those notices that do not pertain to any part of\n       the Derivative Works; and\n\n   (d) If the Work includes a "NOTICE" text file as part of its\n       distribution, then any Derivative Works that You distribute must\n       include a readable copy of the attribution notices contained\n       within such NOTICE file, excluding those notices that do not\n       pertain to any part of the Derivative Works, in at least one\n       of the following places: within a NOTICE text file distributed\n       as part of the Derivative Works; within the Source form or\n       documentation, if provided along with the Derivative Works; or,\n       within a display generated by the Derivative Works, if and\n       wherever such third-party notices normally appear. The contents\n       of the NOTICE file are for informational purposes only and\n       do not modify the License. You may add Your own attribution\n       notices within Derivative Works that You distribute, alongside\n       or as an addendum to the NOTICE text from the Work, provided\n       that such additional attribution notices cannot be construed\n       as modifying the License.\n\n   You may add Your own copyright statement to Your modifications and\n   may provide additional or different license terms and conditions\n   for use, reproduction, or distribution of Your modifications, or\n   for any such Derivative Works as a whole, provided Your use,\n   reproduction, and distribution of the Work otherwise complies with\n   the conditions stated in this License.\n\n5. Submission of Contributions. Unless You explicitly state otherwise,\n   any Contribution intentionally submitted for inclusion in the Work\n   by You to the Licensor shall be under the terms and conditions of\n   this License, without any additional terms or conditions.\n   Notwithstanding the above, nothing herein shall supersede or modify\n   the terms of any separate license agreement you may have executed\n   with Licensor regarding such Contributions.\n\n6. Trademarks. This License does not grant permission to use the trade\n   names, trademarks, service marks, or product names of the Licensor,\n   except as required for reasonable and customary use in describing the\n   origin of the Work and reproducing the content of the NOTICE file.\n\n7. Disclaimer of Warranty. Unless required by applicable law or\n   agreed to in writing, Licensor provides the Work (and each\n   Contributor provides its Contributions) on an "AS IS" BASIS,\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n   implied, including, without limitation, any warranties or conditions\n   of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\n   PARTICULAR PURPOSE. You are solely responsible for determining the\n   appropriateness of using or redistributing the Work and assume any\n   risks associated with Your exercise of permissions under this License.\n\n8. Limitation of Liability. In no event and under no legal theory,\n   whether in tort (including negligence), contract, or otherwise,\n   unless required by applicable law (such as deliberate and grossly\n   negligent acts) or agreed to in writing, shall any Contributor be\n   liable to You for damages, including any direct, indirect, special,\n   incidental, or consequential damages of any character arising as a\n   result of this License or out of the use or inability to use the\n   Work (including but not limited to damages for loss of goodwill,\n   work stoppage, computer failure or malfunction, or any and all\n   other commercial damages or losses), even if such Contributor\n   has been advised of the possibility of such damages.\n\n9. Accepting Warranty or Additional Liability. While redistributing\n   the Work or Derivative Works thereof, You may choose to offer,\n   and charge a fee for, acceptance of support, warranty, indemnity,\n   or other liability obligations and/or rights consistent with this\n   License. However, in accepting such obligations, You may act only\n   on Your own behalf and on Your sole responsibility, not on behalf\n   of any other Contributor, and only if You agree to indemnify,\n   defend, and hold each Contributor harmless for any liability\n   incurred by, or claims asserted against, such Contributor by reason\n   of your accepting any such warranty or additional liability.\n\nEND OF TERMS AND CONDITIONS\n\nAPPENDIX: How to apply the Apache License to your work.\n\n   To apply the Apache License to your work, attach the following\n   boilerplate notice, with the fields enclosed by brackets "[]"\n   replaced with your own identifying information. (Don\'t include\n   the brackets!)  The text should be enclosed in the appropriate\n   comment syntax for the file format. We also recommend that a\n   file or class name and description of purpose be included on the\n   same "printed page" as the copyright notice for easier\n   identification within third-party archives.\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n\thttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n',
    },
  },
  'README*md': {
    file: {
      contents:
        '# Mina zkApp: 04 Zkapp Browser Ui\n\nThis template uses TypeScript.\n\n## How to build\n\n```sh\nnpm run build\n```\n\n## How to run tests\n\n```sh\nnpm run test\nnpm run testw # watch mode\n```\n\n## How to run coverage\n\n```sh\nnpm run coverage\n```\n\n## License\n\n[Apache-2.0](LICENSE)\n',
    },
  },
  'babel*config*cjs': {
    file: {
      contents:
        "module.exports = {\n  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],\n};\n",
    },
  },
  'config*json': {
    file: {
      contents:
        '{\n  "version": 1,\n  "networks": {\n    "berkeley": {\n      "url": "https://proxy.berkeley.minaexplorer.com/graphql",\n      "keyPath": "keys/berkeley.json",\n      "fee": "0.1",\n      "smartContract": "Add"\n    }\n  }\n}\n',
    },
  },
  'eslintrc*cjs': {
    file: {
      contents:
        "module.exports = {\n  root: true,\n  env: {\n    browser: true,\n    node: true,\n    jest: true,\n  },\n  extends: [\n    'eslint:recommended',\n    'plugin:@typescript-eslint/eslint-recommended',\n    'plugin:@typescript-eslint/recommended',\n    'plugin:o1js/recommended',\n  ],\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    ecmaVersion: 'latest',\n  },\n  plugins: ['@typescript-eslint', 'o1js'],\n  rules: {\n    'no-constant-condition': 'off',\n    'prefer-const': 'off',\n  },\n};\n",
    },
  },
  'jest-resolver*cjs': {
    file: {
      contents:
        "module.exports = (request, options) => {\n  return options.defaultResolver(request, {\n    ...options,\n    packageFilter: (pkg) => {\n      // When importing o1js, we specify the Node ESM import as Jest by default imports the web version\n      if (pkg.name === 'o1js') {\n        return {\n          ...pkg,\n          main: pkg.exports.node.import,\n        };\n      }\n      if (pkg.name === 'node-fetch') {\n        return { ...pkg, main: pkg.main };\n      }\n      return {\n        ...pkg,\n        main: pkg.module || pkg.main,\n      };\n    },\n  });\n};\n",
    },
  },
  'jest*config*js': {
    file: {
      contents:
        "/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */\nexport default {\n  verbose: true,\n  preset: 'ts-jest/presets/default-esm',\n  testEnvironment: 'node',\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  testTimeout: 1_000_000,\n  transform: {\n    '^.+\\\\.(t)s$': 'ts-jest',\n    '^.+\\\\.(j)s$': 'babel-jest',\n  },\n  resolver: '<rootDir>/jest-resolver.cjs',\n  transformIgnorePatterns: [\n    '<rootDir>/node_modules/(?!(tslib|o1js/node_modules/tslib))',\n  ],\n  modulePathIgnorePatterns: ['<rootDir>/build/'],\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.+)\\\\.js$': '$1',\n  },\n};\n",
    },
  },
  'package*json': {
    file: {
      contents:
        '{\n  "name": "tutorial-4",\n  "version": "0.1.0",\n  "description": "",\n  "author": "",\n  "license": "Apache-2.0",\n  "keywords": [\n    "mina-zkapp",\n    "mina-zk-app",\n    "mina-dapp",\n    "zkapp"\n  ],\n  "type": "module",\n  "main": "build/src/index.js",\n  "types": "build/src/index.d.ts",\n  "scripts": {\n    "build": "tsc",\n    "buildw": "tsc --watch",\n    "coverage": "node --experimental-vm-modules --experimental-wasm-threads node_modules/jest/bin/jest.js --coverage",\n    "format": "prettier --write --ignore-unknown **/*",\n    "prepare": "cd .. && husky install contracts/.husky",\n    "test": "node --experimental-vm-modules --experimental-wasm-threads node_modules/jest/bin/jest.js",\n    "testw": "node --experimental-vm-modules --experimental-wasm-threads node_modules/jest/bin/jest.js --watch",\n    "lint": "npx eslint src/* --fix"\n  },\n  "lint-staged": {\n    "**/*": [\n      "eslint src/* --fix",\n      "prettier --write --ignore-unknown"\n    ]\n  },\n  "devDependencies": {\n    "@babel/preset-env": "^7.16.4",\n    "@babel/preset-typescript": "^7.16.0",\n    "@types/jest": "^27.0.3",\n    "@typescript-eslint/eslint-plugin": "^5.5.0",\n    "@typescript-eslint/parser": "^5.5.0",\n    "eslint": "^8.7.0",\n    "eslint-plugin-o1js": "^0.4.0",\n    "husky": "^7.0.1",\n    "jest": "^27.3.1",\n    "lint-staged": "^11.0.1",\n    "prettier": "^2.3.2",\n    "ts-jest": "^27.0.7",\n    "typescript": "^4.7.2"\n  },\n  "dependencies": {\n    "o1js": "^0.15.*"\n  }\n}\n',
    },
  },
  src: {
    directory: {
      'Add*test*ts': {
        file: {
          contents:
            "import { Add } from './Add';\nimport { Field, Mina, PrivateKey, PublicKey, AccountUpdate } from 'o1js';\n\n/*\n * This file specifies how to test the `Add` example smart contract. It is safe to delete this file and replace\n * with your own tests.\n *\n * See https://docs.minaprotocol.com/zkapps for more info.\n */\n\nlet proofsEnabled = false;\n\ndescribe('Add', () => {\n  let deployerAccount: PublicKey,\n    deployerKey: PrivateKey,\n    senderAccount: PublicKey,\n    senderKey: PrivateKey,\n    zkAppAddress: PublicKey,\n    zkAppPrivateKey: PrivateKey,\n    zkApp: Add;\n\n  beforeAll(async () => {\n    if (proofsEnabled) await Add.compile();\n  });\n\n  beforeEach(() => {\n    const Local = Mina.LocalBlockchain({ proofsEnabled });\n    Mina.setActiveInstance(Local);\n    ({ privateKey: deployerKey, publicKey: deployerAccount } =\n      Local.testAccounts[0]);\n    ({ privateKey: senderKey, publicKey: senderAccount } =\n      Local.testAccounts[1]);\n    zkAppPrivateKey = PrivateKey.random();\n    zkAppAddress = zkAppPrivateKey.toPublicKey();\n    zkApp = new Add(zkAppAddress);\n  });\n\n  async function localDeploy() {\n    const txn = await Mina.transaction(deployerAccount, () => {\n      AccountUpdate.fundNewAccount(deployerAccount);\n      zkApp.deploy();\n    });\n    await txn.prove();\n    // this tx needs .sign(), because `deploy()` adds an account update that requires signature authorization\n    await txn.sign([deployerKey, zkAppPrivateKey]).send();\n  }\n\n  it('generates and deploys the `Add` smart contract', async () => {\n    await localDeploy();\n    const num = zkApp.num.get();\n    expect(num).toEqual(Field(1));\n  });\n\n  it('correctly updates the num state on the `Add` smart contract', async () => {\n    await localDeploy();\n\n    // update transaction\n    const txn = await Mina.transaction(senderAccount, () => {\n      zkApp.update();\n    });\n    await txn.prove();\n    await txn.sign([senderKey]).send();\n\n    const updatedNum = zkApp.num.get();\n    expect(updatedNum).toEqual(Field(3));\n  });\n});\n",
        },
      },
      'Add*ts': {
        file: {
          contents:
            "import { Field, SmartContract, state, State, method } from 'o1js';\n\n/**\n * Basic Example\n * See https://docs.minaprotocol.com/zkapps for more info.\n *\n * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.\n * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.\n *\n * This file is safe to delete and replace with your own contract.\n */\nexport class Add extends SmartContract {\n  @state(Field) num = State<Field>();\n\n  init() {\n    super.init();\n    this.num.set(Field(1));\n  }\n\n  @method update() {\n    const currentState = this.num.getAndAssertEquals();\n    const newState = currentState.add(2);\n    this.num.set(newState);\n  }\n}\n",
        },
      },
      'index*ts': {
        file: {
          contents: "import { Add } from './Add.js';\n\nexport { Add };\n",
        },
      },
      'interact*ts': {
        file: {
          contents:
            "/**\n * This script can be used to interact with the Add contract, after deploying it.\n *\n * We call the update() method on the contract, create a proof and send it to the chain.\n * The endpoint that we interact with is read from your config.json.\n *\n * This simulates a user interacting with the zkApp from a browser, except that here, sending the transaction happens\n * from the script and we're using your pre-funded zkApp account to pay the transaction fee. In a real web app, the user's wallet\n * would send the transaction and pay the fee.\n *\n * To run locally:\n * Build the project: `$ npm run build`\n * Run with node:     `$ node build/src/interact.js <deployAlias>`.\n */\nimport { Mina, PrivateKey } from 'o1js';\nimport fs from 'fs/promises';\nimport { Add } from './Add.js';\n\n// check command line arg\nlet deployAlias = process.argv[2];\nif (!deployAlias)\n  throw Error(`Missing <deployAlias> argument.\n\nUsage:\nnode build/src/interact.js <deployAlias>\n`);\nError.stackTraceLimit = 1000;\n\n// parse config and private key from file\ntype Config = {\n  deployAliases: Record<\n    string,\n    {\n      url: string;\n      keyPath: string;\n      fee: string;\n      feepayerKeyPath: string;\n      feepayerAlias: string;\n    }\n  >;\n};\nlet configJson: Config = JSON.parse(await fs.readFile('config.json', 'utf8'));\nlet config = configJson.deployAliases[deployAlias];\nlet feepayerKeysBase58: { privateKey: string; publicKey: string } = JSON.parse(\n  await fs.readFile(config.feepayerKeyPath, 'utf8')\n);\n\nlet zkAppKeysBase58: { privateKey: string; publicKey: string } = JSON.parse(\n  await fs.readFile(config.keyPath, 'utf8')\n);\n\nlet feepayerKey = PrivateKey.fromBase58(feepayerKeysBase58.privateKey);\nlet zkAppKey = PrivateKey.fromBase58(zkAppKeysBase58.privateKey);\n\n// set up Mina instance and contract we interact with\nconst Network = Mina.Network(config.url);\nconst fee = Number(config.fee) * 1e9; // in nanomina (1 billion = 1.0 mina)\nMina.setActiveInstance(Network);\nlet feepayerAddress = feepayerKey.toPublicKey();\nlet zkAppAddress = zkAppKey.toPublicKey();\nlet zkApp = new Add(zkAppAddress);\n\nlet sentTx;\n// compile the contract to create prover keys\nconsole.log('compile the contract...');\nawait Add.compile();\ntry {\n  // call update() and send transaction\n  console.log('build transaction and create proof...');\n  let tx = await Mina.transaction({ sender: feepayerAddress, fee }, () => {\n    zkApp.update();\n  });\n  await tx.prove();\n  console.log('send transaction...');\n  sentTx = await tx.sign([feepayerKey]).send();\n} catch (err) {\n  console.log(err);\n}\nif (sentTx?.hash() !== undefined) {\n  console.log(`\nSuccess! Update transaction sent.\n\nYour smart contract state will be updated\nas soon as the transaction is included in a block:\nhttps://berkeley.minaexplorer.com/transaction/${sentTx.hash()}\n`);\n}\n",
        },
      },
    },
  },
  'tsconfig*json': {
    file: {
      contents:
        '{\n  "compilerOptions": {\n    "target": "es2020",\n    "module": "esnext",\n    "lib": ["dom", "esnext"],\n    "outDir": "./build",\n    "rootDir": ".",\n    "strict": true,\n    "strictPropertyInitialization": false, // to enable generic constructors, e.g. on CircuitValue\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true,\n    "esModuleInterop": true,\n    "moduleResolution": "node",\n    "experimentalDecorators": true,\n    "emitDecoratorMetadata": true,\n    "allowJs": true,\n    "declaration": true,\n    "sourceMap": true,\n    "noFallthroughCasesInSwitch": true,\n    "allowSyntheticDefaultImports": true\n  },\n  "include": ["./src"]\n}\n',
    },
  },
};
