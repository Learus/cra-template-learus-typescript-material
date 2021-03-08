#!/bin/bash

usage() {
    echo "Usage: component.sh YOUR_NAME_HERE [Options]"
    echo "Options:"
    echo "-f  | --function :    Creates a function component (default)"
    echo "-ns  | --nostyles :   Does not import and use Material UI styles"
    echo "-r  | --remove :      Removes component"
    echo 
    echo "This script creates a class or function component with a given name, importing:"
    echo "  React"
    echo "  Material UI style class if -s"
    echo
    echo "It creates an interface for the component props + the actual component with minimal structure"
}

SCRIPT_PATH=$(dirname `which $0`)

NAME=$1
STYLES="true"
FUNCTION="true"

if [ -z $NAME ]
then
    echo "ERROR: No name specified."
    echo "For help run with -h"
    usage
    exit 1
fi

if [ "$NAME" == "-h" ]
then
    usage
    exit 1
fi

if [[ "${NAME:0:1}" =~ [A-Z] ]]; then
    echo
else
    echo
    echo "Error: Component name must begin with a capital letter. Name given: $NAME"
    echo
    exit 1
fi

FILE=$SCRIPT_PATH/src/components/$NAME.tsx
STYLESHEET_FILE=$SCRIPT_PATH/src/style/$NAME.scss

# Check input parameters
while [ "$2" != "" ]; do
    case $2 in
        -f | --function )   shift
                            CLASS="true"
                            ;;
        -ns | --nostyles )  shift
                            STYLES="false"
                            ;;
        -r | --remove )     shift
                            rm -rf $FILE
                            echo "Removed $FILE"

                            rm -rf $TEST_FILE
                            echo "Removed $TEST_FILE"
                            exit 1
                            ;;
        -h | --help )       usage
                            exit 1
                            ;;
        * )                 echo "Invalid parameter $2"
                            usage
                            exit 1
    esac
done

# Write component .tsx file
echo
echo "Creating Component: $FILE"

touch $FILE
truncate -s 0 $FILE

PROPS="$NAME"Props

echo "import React from 'react';" >> $FILE
echo >> $FILE

if [ "$STYLES" = "true" ]; then
    echo "import { makeStyles, createStyles, Theme } from '@material-ui/core';" >> $FILE
    echo >> $FILE
    echo "const styles = makeStyles((theme: Theme) => createStyles({" >> $FILE;
    echo -e "\troot: {">> $FILE;
    echo >> $FILE;
    echo -e "\t}" >> $FILE
    echo -e "}));" >> $FILE;
fi

echo >> $FILE

echo "interface $PROPS" >> $FILE
echo "{" >> $FILE
echo >> $FILE
echo "}" >> $FILE
echo >> $FILE
echo >> $FILE

if [ "$FUNCTION" == "true" ]; then
    echo "const $NAME = ({ }: $PROPS) => {" >> $FILE
    echo -e "\tconst classes = styles();" >> $FILE
    echo >> $FILE
    echo -e "\treturn (" >> $FILE
    echo -e "\t\tnull" >> $FILE
    echo -e "\t)" >> $FILE
    echo "};" >> $FILE
    echo >> $FILE
    echo "export default $NAME;" >> $FILE
    echo >> $FILE
fi