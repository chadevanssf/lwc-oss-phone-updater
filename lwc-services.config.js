// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [
        {
            from: 'src/client/resources',
            to: 'dist/resources/'
        },
        {
            from: 'node_modules/@salesforce-ux/design-system/assets',
            to: 'dist/resources/slds/'
        }
    ],
    buildDir: './dist',
    sourceDir: './src/client',
    moduleDir: './src/client/modules',
    localModulesDirs: ['node_modules'],
    devServer: {
        proxy: { '/': 'http://localhost:3002' }
    },
    lwcCompilerOutput: {
        production: {
            compat: false,
            minify: true,
            env: {
                NODE_ENV: 'production'
            }
        }
    }
};
