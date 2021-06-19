# Using Abolute Paths to import Components

1. Install babel plugin module resolver using the below code 
    - npm install --save-dev babel-plugin-module-resolver
2. Install customize cra and react wired using
    - npm install customize-cra react-app-rewired --dev
3. create the .babelrc in the src folder and create the alias using the below sample code

    ```
        {
            "plugins": [
                ["module-resolver", {
                "root": ["./"],
                alias: {
                    Components: './src/components')
                }
                }]
            ]
        }
    ```
4. In the package.json file change the following code to

    ### Before Change
    ```
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    }
    ```
    ### After Change
    ```
     "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
    }
    ```

5. Create the new file naming config.overrides.js and paste the below code
    ```
    const { useBabelRc, override } = require("customize-cra");
    module.exports = override(useBabelRc());
    ```

    -- This will actually say to Webpack to use this custom .babelrc file.