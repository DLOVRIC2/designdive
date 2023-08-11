import bpy 

import sys
sys.path.append("/")

#this function opens blender file loaded on repository which will serve as configurator
def openBlenderTemplateFile():
    bpy.ops.wm.open_mainfile(filepath="objectConfigurator/templateFile.blend")
    

#this function simply imports obj file from temp(currentlyTest) directory
def importObj():
    bpy.ops.import_scene.obj(filepath="objects_3d/temp/chair_0000.obj")


#this function takes imported object and add custom propery to it (specific category = custom property)
def categorizeImportedObject():
    #napisati logiku da prema imenu u strukturi prepozna kategoriju objekta!


    


#testPrint
#for ob in bpy.data.objects:
        #print(ob.name)