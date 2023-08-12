import bpy
import sys
sys.path.append("/")

from objectConfigurator.blenderManipulation import openBlenderTemplateFile, renderCamera, objectProcess

from objectConfigurator.fileManipulation import getObject


category = "chair"

openBlenderTemplateFile("singleObject")
objectPath = getObject(category)
objectProcess(objectPath, category)
renderCamera()


