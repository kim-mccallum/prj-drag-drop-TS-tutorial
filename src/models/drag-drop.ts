//Drag and Drop Interfaces - set up a contract for certain classes to implement drag and drop
export interface Draggable {
  // two event listeners and two handlers
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  // permit the drop
  dragOverHandler(event: DragEvent): void;
  // handler the drop
  dropHandler(event: DragEvent): void;
  // provide some visual feedback to user
  dragLeaveHandler(event: DragEvent): void;
}
