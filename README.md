## Passing Data from one component to another using a service
- Here in this sample project, we are passing data between components that have no relationship.
- The Comp1 and Comp2 do not have a parent to child relatioship.
- We are using a service to define an event emitter in which we get the text entered in the textbox after button click event.

![Components Passing Data - Google Chrome 2023-05-12 at 2 22 56 PM](https://github.com/eKICH/Angular-ComponentsPassingData/assets/73248530/04f30144-91fd-4fdd-852b-8336624707c5)

## Two Way Data Binding - [(ngModel)]="enteredText"
- User enters something in the text box and clicks on the Click Me! button in #comp1 and the "Something" entered by the user is sent to #comp2 and gets emitted

![Components Passing Data - Google Chrome 2023-05-12 at 2 26 20 PM](https://github.com/eKICH/Angular-ComponentsPassingData/assets/73248530/d36bf288-6640-4a9d-8878-af8b9de22295)

