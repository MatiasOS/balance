#!/usr/bin/env bash

for d in */ ; do
    echo Installing $d
    cd $d && npm i && cd ..
done