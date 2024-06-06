# Ashutosh-React

# Static Program

# Dynamic Program

# React CDN Program

# cdn --> Content Delivery Network

# Bundlers --> A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.

# steps to install the parcel bundler

    * Package Manager:
        Bundlers are packages. If we want to use a package in our code, we have to use a package manager.
        We use a package manager known as npm

    * NPM : Node Package Manager is a standard repository for all the packages.it's biggest package manager

    *  Configuring the Project:
        -- npm init            -- we get package.json. it initialize the project.
        It creates a package.json file.
        Paackage.json contains metadata about the project and its dependencies, scripts, and other configuration settings
        Now to install parcel we will do:

        -- npm install -D parcel            --> -D for Development Dependencies
        Now we will get a package-lock.json file.
        package-lock.json : Package-lock.json locks the exact version of packages being used in the project.

# ONE QUESTION FOR YOU :- What is difference between package.json and package-lock.json..?

package.json: This file is primarily used for managing and documenting metadata about the project, including its name, version, author, dependencies, scripts, and other configuration details. It acts as a manifest for the project.

package-lock.json: This file is generated and updated automatically by npm when installing or updating packages. It is used to lock the exact versions of dependencies installed in the project, ensuring reproducibility and consistent installations across different environments.

    * To host on Local Server the command will be:
        -- npx parcel index.html
        this command host our website on local server

    * To make our App For production Ready :
        -- npx parcel build index.html
        this command create the dist folder which we can host on the servers

# Let's Talk About JSX (Javascript XML)

    * Javascript XML :- it's merger of HTML and Javascript to make it simple and readable code. it can be multiple lines of Code.
    const heading = <h1>Hello World</h1>        -- JSX

# Let's Talk About Component:

    * Component : Header,footer,body,Aside,Button etc these are the reusable components in react. but the right meaning of component :it's javscript function which return some piece or some lines of JSX.

# There are two types of Exports and Imports

    -- Defualt export
        export default const heading = () =>{
            return (

            )
        }

    -- Named export
        export const CDN = "https://google.com"

    Same in case of Imports


index.html

<div id="root">
</div>

    script file link the App.js

App.js
create the App component and render the app by using these lines:
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(</App>); -- component


