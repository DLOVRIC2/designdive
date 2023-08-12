import bpy 

import sys
sys.path.append("/")

#this function opens blender file loaded on repository which will serve as configurator
def openBlenderTemplateFile(roomCategory):
    if roomCategory == "bedroom":
        bpy.ops.wm.open_mainfile(filepath="objectConfigurator/templateFile_bedroom.blend")
        return "bedroom"
    elif roomCategory == "livingroom":
        bpy.ops.wm.open_mainfile(filepath="objectConfigurator/templateFile_livingRoom.blend")
        return "livingRoom"
    elif roomCategory == "office":
        bpy.ops.wm.open_mainfile(filepath="objectConfigurator/templateFile_office.blend")
        return "office"
    elif roomCategory == "singleObject":
        bpy.ops.wm.open_mainfile(filepath="objectConfigurator/templateFile_singleObject.blend")
        return "singleObject"

    for ob in bpy.data.objects:
        print(ob.name)
    

#this function simply imports obj file from temp(currentlyTest) directory
def importObj():
    bpy.ops.import_scene.obj(filepath="objects_3d/temp/chair_0000.obj")


def renderCamera():
    for scene in bpy.data.scenes:
        scene.render.engine = 'CYCLES'
    
    bpy.context.scene.render.resolution_x = 1920
    bpy.context.scene.render.resolution_y = 1080
    bpy.context.scene.render.image_settings.file_format = "PNG"

    print("1")
    bpy.context.scene.render.filepath = '/final_user_output/test.png'
    bpy.ops.render.render(write_still=True)
    print("a")
   
   


    #bpy.ops.image.save_as(save_as_render=True, copy=True, filepath="final_user_output/untitled.png")
    print("b")





#this function takes imported object and add custom propery to it (specific category = custom property)
#def categorizeImportedObject():
    #napisati logiku da prema imenu u strukturi prepozna kategoriju objekta!