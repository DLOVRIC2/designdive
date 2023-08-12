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
    for scene in bpy.data.scenes:
        scene.render.engine = 'BLENDER_WORKBENCH'
    bpy.context.scene.render.engine = 'BLENDER_WORKBENCH'
    bpy.context.scene.render.engine = 'CYCLES'
    print("1")
    bpy.ops.render.render(write_still=True)
    print("a")
    bpy.ops.image.save_as(save_as_render=True, copy=True, filepath="final_user_output/untitled.png")
    print("b")



#this function takes imported object and add custom propery to it (specific category = custom property)
#def categorizeImportedObject():
    #napisati logiku da prema imenu u strukturi prepozna kategoriju objekta!