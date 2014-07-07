SHELL := /bin/bash
MOCHA      = node_modules/.bin/mocha
REPORTER   = nyan

test: build
	$(MOCHA) --reporter $(REPORTER) test/ --grep "$(GREP)"

compile:
	@echo "Compiling files"
	time make build

watch:
	watch -n 2 make -s compile

release-major: build test
	npm version major -m "Release %s"
	git push
	npm publish

release-minor: build test
	npm version minor -m "Release %s"
	git push
	npm publish

release-patch: build test
	npm version patch -m "Release %s"
	git push
	npm publish

.PHONY: test lint build release compile watch
