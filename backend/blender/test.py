import bpy
import sys
sys.path.append("/")

from objectConfigurator.blenderManipulation import openBlenderTemplateFile, renderCamera, objectProcess

from objectConfigurator.fileManipulation import getObject


categories = ["table","sofa","lamp","fireplace"]

openBlenderTemplateFile("livingroom")


#objectPath = getObject(category)


objectProcess(categories)
renderCamera()


