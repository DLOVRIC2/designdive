import sys
import os

objects_path = "objects_3d/"





def getChairObject():
    chairName = "chair_0000.obj"
    global objects_path
    for filename in os.listdir(objects_path):
        if filename == chairName:
            path = objects_path + chairName
            
            return path
        

def getSofaObject():
    sofaName = "sofa_0000.obj"
    global objects_path
    for filename in os.listdir(objects_path):
        if filename == sofaName:
            path = objects_path + sofaName
            print(path)
            return path
        
def getLampObject():
    lampName = "lamp_0000.obj"
    global objects_path
    for filename in os.listdir(objects_path):
        if filename == lampName:
            path = objects_path + lampName
            
            return path
        

def getTableObject():
    tableName = "table_0000.obj"
    global objects_path
    for filename in os.listdir(objects_path):
        if filename == tableName:
            path = objects_path + tableName
            
            return path



def getObject(objectCategoryName):
    if objectCategoryName == "chair":
        objectPath = getChairObject()
    elif objectCategoryName == "sofa":
        objectPath = getSofaObject()
        print(objectPath)
    elif objectCategoryName == "lamp":
        objectPath = getLampObject()
    elif objectCategoryName == "table":
        objectPath = getTableObject()
    
    return objectPath