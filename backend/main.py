from fastapi import FastAPI, BackgroundTasks
from fastapi.responses import FileResponse
from generate_objects import ReplicateObjectGenerator
import time
import os

current_path = os.path.dirname(__file__)
blender_path = os.path.join(current_path, "blender")
user_download_path = os.path.join(blender_path, "final_user_output")


app = FastAPI()

tasks = {}

def process_task(prompt, task_id):
    generator = ReplicateObjectGenerator()
    generator.generate_user_files(prompt)

    # TODO: We need to add blender processing here

    tasks[task_id]['status'] = 'completed'
    tasks[task_id]['result'] = user_download_path

@app.post("/start_task/")
async def start_task(prompt: str, background_tasks: BackgroundTasks):
    task_id = str(len(tasks))
    tasks[task_id] = {'status': 'running'}
    background_tasks.add_task(process_task, prompt, task_id)
    return {"status": "success", "task_id": task_id}

@app.get("/task_status/{task_id}")
async def task_status(task_id: str):
    task = tasks.get(task_id, {})
    return {"status": task.get('status', 'not found'), "result": task.get('result')}

@app.get("/download/{file_path:path}")
async def download_file(file_path: str):
    return FileResponse(file_path)
