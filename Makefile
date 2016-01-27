SHELL    := /usr/bin/env bash
MOCHA    := node_modules/.bin/mocha
REPORTER := nyan

.PHONY: test
test:
	$(MOCHA) --reporter $(REPORTER) test/ --grep "$(GREP)"

.PHONY: release-major
release-major: build test
	npm version major -m "Release %s"
	git push
	npm publish

.PHONY: release-minor
release-minor: build test
	npm version minor -m "Release %s"
	git push
	npm publish

.PHONY: release-patch
release-patch: build test
	npm version patch -m "Release %s"
	git push
	npm publish
