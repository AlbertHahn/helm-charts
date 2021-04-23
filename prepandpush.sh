#!/bin/sh
helm lint helm-chart-sources/*
helm package helm-chart-sources/*

git add .
git commit -m "changed"
git push origin