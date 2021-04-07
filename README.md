change on windows:

```
"scripts": {
		"test": "node ./node_modules/mocha/bin/mocha --timeout=30000 ./build/tests/**.js",
		"clean": "rmdir /s /q build",
```

on Linux or Mac

```
"scripts": {
		"test": "./node_modules/mocha/bin/mocha --timeout=30000 ./build/tests/**.js",
		"clean": "rm -rf build",

```
