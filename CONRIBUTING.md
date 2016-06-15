# How to contribute ?

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

# Styleguide

## Git branch naming

* Use lowercase separated by dashes
* Use your initials at the begining of your personal branch : `rs-my-branch`

## Git commit message

* Embrace with brackets the uppercased verb that qualifies the commit `[ ADD ] : `
  * For now we use those verbs : `ADD`, `UPDATE`, `DELETE`, `MERGE`, `FIX`, `REFACT`. 
  * Feel free to propose your own :)
* Add a space and a colon after the bracket to improve lisibility.
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
* Reference issues and pull requests liberally by adding its reference before the verb `[ #12 ][ ADD ]`.

## Javascript styleguide

* Use the [Airbnb](https://github.com/airbnb/javascript) styleguide.
* The jshintrc should follow it. Altough, please do not hesitate to PR if we forgot some rule.
* [Here](https://www.themarketingtechnologist.co/how-to-get-airbnbs-javascript-code-style-working-in-webstorm/) is guide that should help setup your environnment.

### File name styleguide
* file name should match exported function
* file name should be PascalCase if a class is exported
* file name sould be camelCase otherwise

