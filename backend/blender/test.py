import bpy
import sys
import os
sys.path.append(os.path.dirname(__file__))
from objectConfigurator.blenderManipulation import openBlenderTemplateFile, renderCamera, objectProcess
from objectConfigurator.fileManipulation import getObject, itemCategoryCheck
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
import json

current_directory = os.path.dirname(__file__)
user_input_path = os.path.join(current_directory, "user_input", "user_input.json")
with open(user_input_path, "r") as f:
    params = json.load(f)

user_defined_categories = [item.lower() for item in params["user_defined_categories"]]
room_category = params["room_type"]
logger.info(f"User defined categories loaded in are: {user_defined_categories}")
logger.info(f"User defined room type loaded in is: {room_category}")



openBlenderTemplateFile(roomCategory=room_category[0])
logger.info("Just set 'openBlenderTemplateFile'")
pregenerated = itemCategoryCheck(user_defined_categories)
logger.info(f"pregenerated categories are {pregenerated}")
logger.info("Starting the processing")
objectProcess(user_defined_categories, pregenerated)
logger.info("Rendering the camera")
renderCamera("render_test")


