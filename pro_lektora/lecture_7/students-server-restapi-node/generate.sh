#!/bin/sh

openapi-generator generate -g nodejs-express-server -i students.yaml \
	--strict-spec true \
	-p legacyDiscriminatorBehavior=false
