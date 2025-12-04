import { useState } from "react";
import Newproject from "./components/Newproject";
import NoProjectSelected from "./components/NoprojectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  function startAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  function handleSelectProject(id) {
    console.log('masuk ke handle select')
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }

  function handleDeleteProject() {
    console.log('masuk ke handle select')
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
        tasks: prevState.tasks.filter((task) => <task className="projectId"></task> !== prevState.selectedProjectId)
      }
    });
  }

  function handleCancel(projectData) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  };

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Date.now() + Math.floor(Math.random() * 1000)
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  };
  function handleAddTask(text) {
    console.log
    setProjectState(prevState => {
      const newTask = {
        text: text,
        id: Date.now() + Math.floor(Math.random() * 1000),
        projectId: prevState.selectedProjectId
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    });
  };
  function handleDeleteTask(id) {
    console.log("TaskId : " + id);
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    });
  };
  console.log(projectState)
  let selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);
  let content = <SelectedProject tasks={projectState.tasks.filter((task) => task.projectId === projectState.selectedProjectId)} project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={startAddProject} />;
  }
  else if (projectState.selectedProjectId === null) {
    content = <Newproject onAdd={handleAddProject} onCancel={handleCancel} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={startAddProject} projects={projectState.projects} onSelect={handleSelectProject} projectIdSelected={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
