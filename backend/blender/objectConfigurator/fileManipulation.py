import sys
import os

user_objects_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "objects_3d", "user_generated") + "/"
temp_object_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "objects_3d") + "/"

import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

#room category lists
livingRoom = ["lamp", "sofa", "table", "fireplace"]

def getChairObject(userGen):
    chairName = "chair_0000.obj"
    global user_objects_path
    global temp_object_path
    if userGen == True:
        for filename in os.listdir(user_objects_path):
            if filename == chairName:
                path = user_objects_path + chairName
                
                return path
    else:
        for filename in os.listdir(temp_object_path):
            if filename == chairName:
                path = temp_object_path + chairName
                
                return path

def getSofaObject(userGen):
    sofaName = "sofa_0000.obj"
    global user_objects_path
    global temp_object_path
    if userGen == True:
        for filename in os.listdir(user_objects_path):
            if filename == sofaName:
                path = user_objects_path + sofaName
                return path
    else:
        for filename in os.listdir(temp_object_path):
            if filename == sofaName:
                path = temp_object_path + sofaName
                
                return path
        
def getLampObject(userGen):
    lampName = "lamp_0000.obj"
    global user_objects_path
    global temp_object_path
    if userGen == True:
        for filename in os.listdir(user_objects_path):
            if filename == lampName:
                path = user_objects_path + lampName
                return path
    else:
        for filename in os.listdir(temp_object_path):
            if filename == lampName:
                path = temp_object_path + lampName
                
                return path
        

def getTableObject(userGen):
    tableName = "table_0000.obj"
    global user_objects_path
    global temp_object_path
    if userGen == True:
        for filename in os.listdir(user_objects_path):
            if filename == tableName:
                path = user_objects_path + tableName
                return path
    else:
        for filename in os.listdir(temp_object_path):
            if filename == tableName:
                path = temp_object_path + tableName
                
                return path

def getFireplaceObject(userGen):
    fireplaceName = "fireplace_0000.obj"
    global user_objects_path
    global temp_object_path
    if userGen == True:
        for filename in os.listdir(user_objects_path):
            if filename == fireplaceName:
                path = user_objects_path + fireplaceName
                return path
    else:
        for filename in os.listdir(temp_object_path):
            if filename == fireplaceName:
                path = temp_object_path + fireplaceName
                
                return path
        
def itemCategoryCheck(userCategoryList):
    global livingRoom
    pregeneratedObjectList = []
    for i in livingRoom:
        if i not in userCategoryList:
            pregeneratedObjectList.append(i)
        else:
            continue
    return pregeneratedObjectList



def getObject(objectCategoryName):
    if objectCategoryName == "fireplace":
        objectPath = getFireplaceObject()
    elif objectCategoryName == "sofa":
        objectPath = getSofaObject()
    elif objectCategoryName == "lamp":
        objectPath = getLampObject()
    elif objectCategoryName == "table":
        objectPath = getTableObject()
    
    return objectPath


def solveUserGenerated(userGenerated, a):
    if userGenerated == "fireplace":
        objectPath = getFireplaceObject(a)
        return objectPath
    elif userGenerated == "sofa":
        objectPath = getSofaObject(a)
        return objectPath
    elif userGenerated == "lamp":
        objectPath = getLampObject(a)
        return objectPath
    elif userGenerated == "table":
        objectPath = getTableObject(a)
        return objectPath

    

def solvePregenerated(pregenerated,a):
    print("uslo u solver pregenerated")
    #for i in pregenerated:
        #print(i)
    if pregenerated == "fireplace":
        objectPath = getFireplaceObject(a)
        return objectPath
    elif pregenerated == "sofa":
        objectPath = getSofaObject(a)
        return objectPath
    elif pregenerated == "lamp":
        objectPath = getLampObject(a)
        return objectPath
    elif pregenerated == "table":
        objectPath = getTableObject(a)
        return objectPath



