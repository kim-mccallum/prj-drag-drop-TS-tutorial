import { Project, ProjectStatus } from "../models/project";

//Project state management class
type Listener<T> = (items: T[]) => void;

class State<T> {
  // protected can't be accessed outside of the class but can be accessed by anything that inherits
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;
  // singleton constructor
  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }
  //let all the listeners know that something changed and rerender is required
  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); //copy to deal with pass by reference
    }
  }
}

//create an instance of this project so that you can refer to this global object anywhere SINGLETON
export const projectState = ProjectState.getInstance();
