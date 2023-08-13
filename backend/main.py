from fastapi import FastAPI, BackgroundTasks
from fastapi.responses import FileResponse
from generate_objects import ReplicateObjectGenerator
import time
import os
import logging
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Body
from typing import List


current_path = os.path.dirname(__file__)
blender_path = os.path.join(current_path, "blender")
user_download_path = os.path.join(blender_path, "final_user_output")


app = FastAPI()
logger = logging.getLogger("uvicorn")


origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


tasks = {}

def process_task(prompt, task_id):
    logger.info("I'm about to start this generator")
    generator = ReplicateObjectGenerator()
    print(prompt)
    generator.generate_user_files(prompt)

    # TODO: We need to add blender processing here

    tasks[task_id]['status'] = 'completed'
    tasks[task_id]['result'] = user_download_path

@app.post("/start_task/")
async def start_task(background_tasks: BackgroundTasks, prompts: List[str] = Body(...)):
    logger.info(f"Received start_task request with prompts: {prompts}")
    task_id = str(len(tasks))
    tasks[task_id] = {'status': 'running'}
    background_tasks.add_task(process_task, prompts, task_id)
    logger.info(f"Started task with ID: {task_id}")
    return {"status": "success", "task_id": task_id}

@app.get("/task_status/{task_id}")
async def task_status(task_id: str):
    task = tasks.get(task_id, {})
    return {"status": task.get('status', 'not found'), "result": task.get('result')}

@app.get("/download/{file_path:path}")
async def download_file(file_path: str):
    return FileResponse(file_path)
