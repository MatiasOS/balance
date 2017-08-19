NODE_MODULES_BINARIES = ./node_modules/.bin
BUILD_DIR = ./build

BABEL = $(NODE_MODULES_BINARIES)/babel
BABEL_WATCH = $(NODE_MODULES_BINARIES)/babel-watch
MOCHA = $(NODE_MODULES_BINARIES)/mocha

DEBUG = seneca-basenode
MAINJS_FILE = srv/base.js

dev:
	DEBUG=$(DEBUG) $(BABEL_WATCH) $(MAINJS_FILE) --watch .

production:
	make clean build run

build:
	mkdir -p $(BUILD_DIR)
	$(BABEL) ./utils -s -D -d $(BUILD_DIR)/utils
	$(BABEL) ./srv/*.js -s -D -d $(BUILD_DIR)/

run:
	NODE_ENV=production forever start -a --uid $(DEBUG) -e error.log -o server.log $(BUILD_DIR)/$(MAINJS_FILE)

stop:
	forever stop $(DEBUG)

clean:
	rm -rf $(BUILD_DIR)

.PHONY: dev production build run clean
