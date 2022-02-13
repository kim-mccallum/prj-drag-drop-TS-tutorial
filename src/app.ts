// Goal - lists of projects - Active and Finished (drag and drop from one to the other)
class ProjectInput {
  templateElement: HTMLTemplateElement; //type available become dom is added to tsconfig lib
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement; //typecast
    this.hostElement = document.getElementById("app")! as HTMLDivElement; //typecast

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); //second arg is deep clone
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
