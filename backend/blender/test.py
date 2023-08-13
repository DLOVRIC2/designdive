import bpy
import sys
sys.path.append("/")

from objectConfigurator.blenderManipulation import openBlenderTemplateFile, renderCamera, objectProcess

from objectConfigurator.fileManipulation import getObject, itemCategoryCheck


user_defined_categories = ["table","fireplace"]



openBlenderTemplateFile("livingroom")

pregenerated = itemCategoryCheck(user_defined_categories)
print(pregenerated)

#objectPath = getObject(category)


objectProcess(user_defined_categories, pregenerated)
renderCamera("render_test")


