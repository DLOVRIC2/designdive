from fastapi import FastAPI, BackgroundTasks
from fastapi.responses import FileResponse
from generate_objects import ReplicateObjectGenerator
import time
import os
import logging
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Body
from typing import List
from subprocess import run
from pydantic import BaseModel
import json
from fastapi.staticfiles import StaticFiles
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response
from fastapi import HTTPException

current_path = os.path.dirname(__file__)
blender_path = os.path.join(current_path, "blender")
user_download_path = os.path.join(blender_path, "final_user_output", "render_test.png")
user_input_save_path = os.path.join(current_path, "blender", "user_input", "user_input.json")
user_input_save_folder = os.path.join(current_path, "blender", "user_input")
final_user_output_path = os.path.join(blender_path, "final_user_output")

app = FastAPI()
logger = logging.getLogger("uvicorn")


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


tasks = {}

class CustomCORSMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)

        # Check if the request is for a static file
        if request.url.path.startswith("/static"):
            response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
            response.headers["Access-Control-Allow-Methods"] = "GET"
            response.headers["Access-Control-Allow-Headers"] = "*"

        return response

app.add_middleware(CustomCORSMiddleware)
app.mount("/static", StaticFiles(directory=final_user_output_path), name="static")


class StartTaskRequest(BaseModel):
    prompts: List[str]
    user_defined_categories: List[str]
    room_type: str

def process_task(prompts, user_defined_categories, room_type, task_id):
    logger.info("I'm about to start this generator")
    generator = ReplicateObjectGenerator()
    generator.generate_user_files(prompts, user_defined_categories)
    logger.info("Finished creating all the 3D models. Moving onto rendering in blender.")

    ## SAVE INPUTS
    params = {
        "user_defined_categories": user_defined_categories,
        "room_type": [room_type]
    }
    with open(user_input_save_path, "w") as f:
        json.dump(params, f)

    logger.info(f"These are the params I've saved {params}")
        
    try:
        blender_command = ["blender", "--background", "--python", "blender/test.py"]
        run(blender_command)
    except Exception as e:
        logger.info("WHOOOOOOOPS")
        logger.info(e)

    tasks[task_id]['status'] = 'completed'
    tasks[task_id]['result'] = f'http://localhost:8000/static/render_test.png'

@app.post("/start_task/")
async def start_task(background_tasks: BackgroundTasks, requests: StartTaskRequest):
    logger.info(f"Received start_task request with prompts: {requests.prompts}")
    task_id = str(len(tasks))
    tasks[task_id] = {'status': 'running'}
    background_tasks.add_task(process_task, requests.prompts, requests.user_defined_categories, requests.room_type, task_id)
    logger.info(f"Started task with ID: {task_id}")
    return {"status": "success", "task_id": task_id}

@app.get("/task_status/{task_id}")
async def task_status(task_id: str):
    task = tasks.get(task_id, {})
    return {"status": task.get('status', 'not found'), "result": task.get('result')}

@app.get("/download/{file_path:path}")
async def download_file(file_path: str):
    return FileResponse(file_path)