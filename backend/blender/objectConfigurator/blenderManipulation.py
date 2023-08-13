import bpy 

import sys
sys.path.append("/")

#this function takes argument defined by user which opens specific blender file according to user needs 
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


#this function simply imports obj file from temp(currentlyTest) directory
def importObj(filePath):
    bpy.ops.import_scene.obj(filepath=filePath)
    

def fixTranslationRotation(objectName):

    for ob in bpy.data.objects:

        if ob.name.startswith(objectName):
            
            ob.rotation_euler = (0,0,0)
           
            ob.location[2] = ob.dimensions.z/2

            bpy.context.view_layer.objects.active = ob
            ob.select_set(True)

            bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')

            getObjectLocRot(objectName)




def getObjectLocRot(objectCategory):
    for ob in bpy.data.objects:
        print(ob.name + "111")
        if ob.type == "EMPTY":
            if ob.name.startswith(objectCategory):
                print(ob.name + "lalalala")
                
            else:
                print("nest cudno")
        else:
            print("not empty object")
            



            

            

def objectProcess(filePath, objectName):
    importObj(filePath)
    fixTranslationRotation(objectName)
    print("*****processed*******")


def renderCamera():
    for scene in bpy.data.scenes:
        scene.render.engine = 'CYCLES'
    
    bpy.context.scene.render.resolution_x = 1920
    bpy.context.scene.render.resolution_y = 1080
    bpy.context.scene.render.image_settings.file_format = "PNG"


    bpy.context.scene.render.filepath = '/final_user_output/atest.png'
    bpy.ops.render.render(write_still=True)

   
   


    #bpy.ops.image.save_as(save_as_render=True, copy=True, filepath="final_user_output/untitled.png")
    print("b")





#this function takes imported object and add custom propery to it (specific category = custom property)
#def categorizeImportedObject():
    #napisati logiku da prema imenu u strukturi prepozna kategoriju objekta!