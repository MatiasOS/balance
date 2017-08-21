#!/usr/bin/env bash

echo Installing base
cd ms-base && npm i && cd ..
echo Installing clilent
cd ms-client1 && npm i && cd ..
echo Installing worker 1
cd ms-worker1 && npm i && cd ..
echo Installing worker 2
cd ms-worker2 && npm i && cd ..
echo Installing worker 3
cd ms-worker3 && npm i && cd ..