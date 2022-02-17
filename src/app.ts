// THREE slashes is special syntax for accessing namespaces
/// <reference path="models/drag-drop.ts"/>
/// <reference path="models/project.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="util/validation.ts"/>
/// <reference path="decorators/autobind.ts"/>

/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-list.ts"/>

// make sure to comment in the outFile and specify a single bundle file

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
