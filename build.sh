#!/usr/bin/env bash

for d in */ ; do
    echo building $d
    cd $d && npm run build && cd ..
done