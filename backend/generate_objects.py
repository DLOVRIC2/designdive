import replicate
from dotenv import load_dotenv
import os
import json
import requests
from typing import List
import re
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ReplicateObjectGenerator:

    def __init__(self):
        self.current_file = os.path.dirname(__file__)
        self.root_dir = os.path.dirname(self.current_file)
        self.temp_dir = os.path.join(self.current_file, "blender/objects_3d/temp")
        self.user_gen_dir = os.path.join(self.current_file, "blender/objects_3d/user_generated")
        self.blender_dir = os.path.join(self.current_file, "blender/objects_3d")
        load_dotenv(os.path.join(self.root_dir, ".env"))
        self.generated_objects = {}
        self.replicate_api_key = os.environ.get("REPLICATE_API_TOKEN")

        if not self.replicate_api_key:
            raise ValueError("You must provide a replicate API key.")
        else:
            os.environ["REPLICATE_API_TOKEN"] = self.replicate_api_key


    def _download_obj_file(self, url: str, file_path: str):
        """Download processed objects."""
        response = requests.get(url)
        if response.status_code == 200:
            logger.info("Status code == 200!")
            with open(file_path, "wb") as obj_file:
                obj_file.write(response.content)
            print(f"{file_path} downloaded")
        else:
            print(f"Failed to download {file_path}")

    def _generate_object(self, prompt: str) -> List:
        """Calls replicate API to generate .gif and .obj"""
        logger.info(f"Running the Replicate api call with the following prompt: {prompt}")
        return replicate.run(
            "cjwbw/shap-e:5957069d5c509126a73c7cb68abcddbb985aeefa4d318e7c63ec1352ce6da68c",
            input={"prompt": prompt, "save_mesh": True}
        )

    def _process_object(self, item: str, new_name:str, save_path: str):
        """Runs the api call to generate object and downloads the .obj file in a folder for blender processing"""
        output = self._generate_object(item)
        logger.info(f"Sucessfully generated {item}")
        
        # Create a valid file name
        valid_name = new_name.lower() + "_0000"
        logger.info("Saved it under the name {valid_name}")

        self.generated_objects[valid_name] = {"gif": output[0], "obj": output[1]}

        # Save the file
        obj_file_name = f"{valid_name}.obj"
        obj_file_path = os.path.join(save_path, obj_file_name)
        logger.info(f"Saving the file to the following location: {obj_file_path}")
        self._download_obj_file(output[1], obj_file_path)

    def generate_temp_files(self, objects: List[str]):
        """Generates temp files that will be used to render an initial scene in blender."""
        json_file_path = os.path.join(self.blender_dir, "generated_objects.json")

        if os.path.exists(json_file_path):
            with open(json_file_path, "r") as json_file:
                existing_data = json.load(json_file)
                # Update the generate objects dictionary
                self.generated_objects.update(existing_data)
        
        for item in objects:
            if item in self.generated_objects:
                print(f"{item} already exists in teh JSON file. Skipping.")
                continue
            self._process_object(item, save_path=self.temp_dir)

        with open(json_file_path, "w") as json_file:
            json.dump(self.generated_objects, json_file, indent=4)

        logger.info(f"Generated objects saved to {json_file_path}")

    def generate_user_files(self, prompts: List[str], user_defined_categories: List[str]):
        """Generates an object """

        logger.info(f"Received a total of {len(prompts)} prompts.")
        if len(prompts) != 0:
            for i, prompt in enumerate(prompts):
                selected_object = user_defined_categories[i]
                self._process_object(prompt, selected_object, save_path=self.user_gen_dir)

                json_file_path = os.path.join(self.root_dir, "generated_objects.json")

                with open(json_file_path, "w") as json_file:
                    json.dump(self.generated_objects, json_file, indent=4)

                print("Generated objects saved to", json_file_path)



if __name__ == "__main__":
    # Usage example
    generator = ReplicateObjectGenerator()
    fixed_objects = ["lamp", "rug", "television", "mirror", "plant", "clock", "cabinet", "fireplace"]
    user_object = ["A chair that looks like an avocado"]

    generator.generate_temp_files(fixed_objects)
    # generator.generate_user_files(user_object)