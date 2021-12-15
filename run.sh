#!/bin/bash
imageName=app
containerName=appContainer

sudo docker build -t $imageName -f Dockerfile  .

echo Delete old container...
sudo docker rm -f $containerName

echo Run new container...
sudo docker run -d -p 5000:5000 --name $containerName $imageName
