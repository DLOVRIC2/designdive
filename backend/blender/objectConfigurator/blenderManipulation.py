import bpy 

import sys
sys.path.append("/")

#this function opens blender file loaded on repository which will serve as configurator
def openBlenderTemplateFile():
    bpy.ops.wm.open_mainfile(filepath="objectConfigurator/templateFile.blend")
    


def importObj():
    bpy.ops.import_scene.obj(filepath="objects_3d/temp/chair_0000")


    