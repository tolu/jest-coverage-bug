# jest-coverage-bug
Minimal repo for reproducing bug with `jest --coverage` used together with `--forceExit`.

This produces coverage reports with jest 19.0.2  
```
jest --coverage --forceExit
```

It does not with jest 20.0.1 

[Jest issue #3555](https://github.com/facebook/jest/issues/3555)
