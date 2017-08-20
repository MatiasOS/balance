NODE_MODULES_BINARIES = ./node_modules/.bin
BUILD_DIR = ./build
JS_FILES=$(shell find lib -type f -name '*.js' | tail -r)

BABEL = $(NODE_MODULES_BINARIES)/babel
BABEL_WATCH = $(NODE_MODULES_BINARIES)/babel-watch
MOCHA = $(NODE_MODULES_BINARIES)/mocha
STANDARD = $(NODE_MODULES_BINARIES)/standard
SNAZZY = $(NODE_MODULES_BINARIES)/snazzy
JSDOC2MD = $(NODE_MODULES_BINARIES)/jsdoc2md
NAME = boiler
MAINJS_FILE = srv/service.js

dev:
	DEBUG=$(NAME) $(BABEL_WATCH) --watch . $(MAINJS_FILE)

build:
	mkdir -p $(BUILD_DIR)
	$(BABEL) ./lib -s -D -d $(BUILD_DIR)/lib
	$(BABEL) ./srv/*.js -s -D -d $(BUILD_DIR)/

production:
	make clean build run

run:
	NODE_ENV=production forever start -a --uid $(NAME) -e error.log -o server.log $(BUILD_DIR)/$(MAINJS_FILE)

stop:
	forever stop $(DEBUG)

clean:
	rm -rf $(BUILD_DIR)

code-style:
	$(STANDARD) --fix --verbose | $(SNAZZY)

generate-docs:
	$(JSDOC2MD) $(JS_FILES) > DOC.md

test:
	make code-style && $(MOCHA) --compilers js:babel-core/register ./tests/**/*.spec.js


.PHONY: dev build production run stop clean code-style generate-docs test
