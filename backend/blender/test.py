import bpy
import sys
sys.path.append("/")

from objectConfigurator.blenderManipulation import openBlenderTemplateFile, renderCamera




openBlenderTemplateFile("singleObject")
renderCamera()


