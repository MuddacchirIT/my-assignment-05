### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**
Answer: Basically "getElementById" is unique, It is looking for "element" and return "element". On the otherhand, "getElementsByClassName" is common, It is looking for "element" and return "array-like".

querySelector is looking for "id, class, tag, attribute" in CSS selector and return "element". On the otherhand, querySelectorAll is looking for "element" and return "NodeList" in loop and forEach.

2. How do you **create and insert a new element into the DOM**?
Answer: First time, element is created by createElement with added attribute. And then used appendChild() / prepend() / before() / after() and finally setup in DOM.

3. What is **Event Bubbling** and how does it work?
Answer: "Event Bubbling" is diffent outside and distributing from "Event" inside. Like this increasing...

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is kind of technique, where is setup parent listener and child handle.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault() is stopped for element default action not working for bubbling/capturing. On the otherside, stopPropagation is worked for to stop Event propagation bubbling or capturing and not stopped for Default action.
---
