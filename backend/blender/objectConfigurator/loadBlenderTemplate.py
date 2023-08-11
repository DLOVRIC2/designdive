import bpy 

import sys
sys.path.append("/")

#this function opens blender file loaded on repository which will serve as configurator
def openBlenderTemplateFile():
    bpy.ops.wm.open_mainfile(filepath="templateFile.blend")
    