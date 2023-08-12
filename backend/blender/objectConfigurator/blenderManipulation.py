import bpy 

import sys
sys.path.append("/")

#this function opens blender file loaded on repository which will serve as configurator
def openBlenderTemplateFile():
    bpy.ops.wm.open_mainfile(filepath="objectConfigurator/templateFile.blend")
    for ob in bpy.data.objects:
        print(ob.name)
    

#this function simply imports obj file from temp(currentlyTest) directory
def importObj():
    bpy.ops.import_scene.obj(filepath="objects_3d/temp/chair_0000.obj")


def renderCamera():
    # Set render engine to CYCLES
    bpy.context.scene.render.engine = 'CYCLES'

    # Set the path where the rendered image will be saved
    bpy.context.scene.render.filepath = "/final_user_output/untitled.png"

    # Set the image file format
    bpy.context.scene.render.image_settings.file_format = 'PNG'

    # Start rendering
    bpy.ops.render.render(write_still=True)





#this function takes imported object and add custom propery to it (specific category = custom property)
#def categorizeImportedObject():
    #napisati logiku da prema imenu u strukturi prepozna kategoriju objekta!