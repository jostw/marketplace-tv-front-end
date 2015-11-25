# make install - getting an error? Run `npm install` first.
#                The directive comes from mozilla/marketplace-gulp.
install:
	@echo "ERROR: Please run `npm install` before running `make install`".

-include node_modules/marketplace-gulp/Makefile

TEST_URL?='http://localhost:8674'

package:
	@node_modules/.bin/gulp package

iframe_package:
	@node_modules/.bin/gulp iframe_package

.PHONY: package

test-iframe-package:
	rm -f package/iframe/bundle.js
	make iframe_package
	test -f package/iframe/bundle.js
	cmp -s package/iframe/bundle.js package/builds/_iframe_prod/bundle.js
	MKT_URL=testurl ./node_modules/.bin/mocha package/iframe/tests/*
