// Component Base Class - generic class for inheritance (abstract)
namespace App {
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    templateElement: HTMLTemplateElement; //type available because dom is added to tsconfig lib
    hostElement: T;
    element: U;
    //? next to parameter means it's optional
    constructor(
      templateId: string,
      hostElementId: string,
      insertAtStart: boolean,
      newElementId?: string
    ) {
      this.templateElement = document.getElementById(
        templateId
      )! as HTMLTemplateElement; //typecast
      this.hostElement = document.getElementById(hostElementId)! as T; //typecast

      const importedNode = document.importNode(
        this.templateElement.content,
        true
      ); //second arg is deep clone
      this.element = importedNode.firstElementChild as U;
      if (newElementId) {
        this.element.id = newElementId;
      }
      this.attach(insertAtStart);
    }
    private attach(insertAtBeginning: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtBeginning ? "afterbegin" : "beforeend",
        this.element
      );
    }
    abstract configure(): void;
    abstract renderContent(): void;
  }
}
