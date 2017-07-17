# Virtual Hobbyshop - A slightly better Docker/K8S test app (based on k8s redis guestbook)

## Why?
Because I needed a slightly better looking test application than the standard redis textbook example.

## What does it do?
It presents a simulation of a store front with a working product review function. You can give a product a "star rating" and enter a comment. The comments are stored in a two node redis-cluster. To make sure the cluster is working, reviews are stored in the slave node and read from the master.

## How does it work?
There are three nodes (each implemented as a docker container):
web: Running an Apache web server and a VERY simple PHP program that loads and stores product reviews.
redis-master: Master node of the redis database
redis-slave: Slave node of the redis database

## Installation
The easiest way to install and run is using docker-compose. Simply change your working directory to the directory where the docker-compose.yml file is stored. Then type the following and you application should be up and running:
docker-compose up -d

## Why model airplanes and hobby stores?
Because I love to geek out over RC planes. 

# What's the plane in the picture?
It's a 3DHobbyShop 72" Extra. Excellent plane if you're into the aerobatic stuff. This particular model has been discontinued and replaced by the even better 75" Extra. 
