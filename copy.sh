#!/bin/bash

# Create template

mkdir -p template
cp t_gitignore template/gitignore

deps=`jq '.dependencies' ./package.json`
echo    "{
\"dependencies\": $deps,
\"scripts\": {
    \"lint\": \"eslint --ext .js,.jsx,.ts,.tsx ./\",
    \"fix\": \"eslint --ext .js,.jsx,.ts,.tsx  --fix ./\"
}
}" > ./template.json

# Copy src and config files

cp -a ./src/. template/src
cp -a ./public/. template/public

cp .eslintignore .eslintrc tsconfig.json README.md Dockerfile nginx.conf component.sh template/ || true
