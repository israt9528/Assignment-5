1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: If we want to get an element from DOM,
we use .getElementById("id") method.
It finds one element by the given id and then returns the element directly(not an array/collection).

If we want to get multiple elements from DOM,
we use .getElementsByClassName("class") method.
It finds all elements with the given class and then returns a live HTMLCollection.

By using querySelector("css-selector") method we can get the first matching element with the given css-selector.

By using querySelectorAll("css-selector") method we can get all the matching elements with the given css-selector.
It will returns a static NodeList.

2. How do you create and insert a new element into the DOM?

Ans: For create new element I use document.createElement('tagName")
method. Then add content by using .innerText or .innerHTml to the new element.

For insert a new element into the DOM, first get the parent element where i want to insert and then use parentNode.appendChild(newElement) method to insert the new element.

3. What is Event Bubbling and how does it work?

Ans: Event Bubbling is a behavior in the DOM where an event triggered on a child element first runs it's handler, then bubbles up to its parent, then to it's grand parent, and so on- up to the DOM tree.

The working principles are given bellow:

1.  Click or trigger an event on the target element
2.  JavaScript runs that element's event handler (if any)
3.  Then the event "bubbles up" to it's parent, runs the parent’s handler (if any).
4.  This continues up through ancestors until reaching the root (document).

5.  What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where you attach a single event listener to a parent element and handle events that happen on it's child elements.
This works because of "event bubbling".

It is useful because..

1. We can add one listener instead of many and save memory space.
2. Handles dynamically added elements automatically.
3. Provides cleaner code which is easier to maintain.

4. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() → stops the default browser behavior of an element(form submit, link navigation, right-click menu, etc.).

stopPropagation() → stops the event from bubbling up or capturing down through the DOM tree.
