import bpy 
from objectConfigurator.fileManipulation import getObject
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

def getEmptyLocRot(objectCategory):
    
    for ob in bpy.data.objects:

        if ob.type == "EMPTY":
            if ob.name.startswith(objectCategory):
                ob_locx = ob.location[0]
                ob_locy = ob.location[1]
                ob_locz = ob.location[2]
                ob_rotx = ob.rotation_euler[0]
                ob_roty = ob.rotation_euler[1]
                ob_rotz = ob.rotation_euler[2]
                return ob_locx, ob_locy, ob_locz, ob_rotx, ob_roty, ob_rotz
            else:
                continue
           

def importObj(filePath):
    bpy.ops.import_scene.obj(filepath=filePath)
    

def fixTranslationRotation(objectName):

    for ob in bpy.data.objects:

        if ob.type == "MESH":
            

            if ob.name.startswith(objectName) and objectName == "table":

                ob.rotation_euler = (0,0,0)
            
                ob.location[2] = ob.dimensions.z/2

                bpy.context.view_layer.objects.active = ob
                ob.select_set(True)

                bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')
                ob  = bpy.context.view_layer.objects.active 
                ob.select_set(True)
                ob.dimensions = (1,1,0.35)
                emptyLoc_x, emptyLoc_y, emptyLoc_z,emptyRot_x, emptyRot_y,emptyRot_z = getEmptyLocRot(objectName)
                ob.location[0] = emptyLoc_x
                ob.location[1] = emptyLoc_y
                ob.location[2] = emptyLoc_z
                ob.rotation_euler = (emptyRot_x, emptyRot_y, emptyRot_z)
                

                
               
            elif ob.name.startswith(objectName) and objectName == "sofa":
                print(objectName + " " + ob.name)
                ob.rotation_euler = (0,0,0)
            
                ob.location[2] = ob.dimensions.z/2

                bpy.context.view_layer.objects.active = ob
                ob.select_set(True)

                bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')
                ob  = bpy.context.view_layer.objects.active 
                ob.select_set(True)
                ob.dimensions = (2,0.8,0.9)
                emptyLoc_x, emptyLoc_y, emptyLoc_z,emptyRot_x, emptyRot_y,emptyRot_z = getEmptyLocRot(objectName)
                ob.location[0] = emptyLoc_x
                ob.location[1] = emptyLoc_y
                ob.location[2] = emptyLoc_z
                ob.rotation_euler = (emptyRot_x, emptyRot_y, emptyRot_z)

                

            elif ob.name.startswith(objectName) and objectName == "lamp":
                print(objectName + " " + ob.name)
                ob.rotation_euler = (0,0,0)
            
                ob.location[2] = ob.dimensions.z/2

                bpy.context.view_layer.objects.active = ob
                ob.select_set(True)

                bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')
                ob  = bpy.context.view_layer.objects.active 
                ob.select_set(True)
                ob.dimensions = (0.5,0.5,0.8)
                emptyLoc_x, emptyLoc_y, emptyLoc_z,emptyRot_x, emptyRot_y,emptyRot_z = getEmptyLocRot(objectName)
                ob.location[0] = emptyLoc_x
                ob.location[1] = emptyLoc_y
                ob.location[2] = emptyLoc_z
                ob.rotation_euler = (emptyRot_x, emptyRot_y, emptyRot_z)

            elif ob.name.startswith(objectName) and objectName == "fireplace":
                print(objectName + " " + ob.name)
                ob.rotation_euler = (0,0,0)
            
                ob.location[2] = ob.dimensions.z/2

                bpy.context.view_layer.objects.active = ob
                ob.select_set(True)

                bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')
                ob  = bpy.context.view_layer.objects.active 
                ob.select_set(True)
                ob.dimensions = (0.9,0.5,2)
                emptyLoc_x, emptyLoc_y, emptyLoc_z,emptyRot_x, emptyRot_y,emptyRot_z = getEmptyLocRot(objectName)
                ob.location[0] = emptyLoc_x
                ob.location[1] = emptyLoc_y
                ob.location[2] = emptyLoc_z
                ob.rotation_euler = (emptyRot_x, emptyRot_y, emptyRot_z)



        
             
               



                

                
def renderCamera():
    for scene in bpy.data.scenes:
        scene.render.engine = 'CYCLES'
    
    bpy.context.scene.render.resolution_x = 1920
    bpy.context.scene.render.resolution_y = 1080
    bpy.context.scene.render.image_settings.file_format = "PNG"

    
    bpy.context.scene.render.filepath = '/final_user_output/atest.png'
    bpy.ops.render.render(write_still=True)

                
         

def objectProcess(objectCategories):
    for i in objectCategories:
        print(i)
        filePath = getObject(i)
        print (filePath)
        importObj(filePath)
        fixTranslationRotation(i)
    
        
        #print("*****processed*******")


