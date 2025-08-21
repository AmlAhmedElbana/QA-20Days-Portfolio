# 📘 QA Glossary – ISTQB Chapters 1–3

---

## Chapter 1 – Fundamentals of Testing

- **Testing**: Process of evaluating software to find defects and ensure it meets requirements.  
- **Defect**: A flaw or deviation in a software product.  
- **Error (Mistake)**: A human action that produces an incorrect result.  
- **Failure**: A deviation of the software from its expected behavior.  
- **Debugging**: Process of finding, analyzing and fixing the cause of failures.  
- **Verification**: Are we building the product right? (e.g. reviews, static testing)  
- **Validation**: Are we building the right product? (e.g. execution-based testing)  
- **Quality**: The degree to which a component meets specified requirements and expectations.  
- **Quality Assurance (QA)**: Planned activities to ensure quality (process-focused).  
- **Quality Control (QC)**: Identifying defects in the actual product (product-focused).  
- **Exhaustive Testing**: Testing all possible combinations (often impractical).  
- **Risk**: The possibility of an event that could impact objectives.  

---

## Chapter 2 – Software Development Lifecycle (SDLC) and Testing

- **SDLC**: Structured process followed for developing software (e.g. Waterfall, Agile).  
- **Test Levels**: Unit → Integration → System → Acceptance.  
- **Test Types**: Functional, Non-functional, Structural, and Change-related testing.  
- **Regression Testing**: Testing unchanged parts after changes to ensure nothing broke.  
- **Confirmation Testing**: Re-testing a specific failed test after a fix.  
- **White-box Testing**: Based on internal code structure (e.g. unit testing).  
- **Black-box Testing**: Based on external behavior and specifications.  
- **Component Testing**: Testing individual units in isolation.  
- **Integration Testing**: Testing interaction between integrated components.  
- **System Testing**: End-to-end validation of the whole system.  
- **Acceptance Testing**: Performed to validate system readiness by user/stakeholder.  

---

## Chapter 3 – Static Testing

- **Static Testing**: Testing technique without executing the code (e.g. reviews, walkthroughs).  
- **Review**: Evaluation of documentation/code to find defects early.  
- **Walkthrough**: Informal review led by the author.  
- **Technical Review**: Formal review by technical peers.  
- **Inspection**: Formal, structured review to detect defects systematically.  
- **Defect Density**: Number of defects per size unit (e.g. per 1,000 lines of code).  
- **Static Analysis**: Automated examination of code or design without executing it.  
- **Tool-Supported Review**: Using tools to manage or automate the review process.  

---

✅ Total: ~30 core terms covering the 3 chapters.


## Chapter 4 – Test Analysis and Design
### 🧩 Decision Table & State Transition Terms

- **Condition**:  
  A specific input, state, or scenario that affects the outcome of a decision.  
  Example: "Is the user logged in?" (Yes/No)

- **Rule**:  
  A unique combination of conditions that defines a single path in a decision table.  
  Each rule leads to a specific outcome (action).  
  Example: Rule 3 = Logged in: Yes, Cart: Yes, Payment: No

- **Action**:  
  The system's response or output triggered by a specific rule.  
  Example: “Allow Checkout” or “Display Error: Missing Payment Info”

- **Event**:  
  An occurrence that causes a change in the system state.  
  Often represents a user action.  
  Example: Clicking "Add to Cart", "Finish", or "Cancel"

- **Transition**:  
  The movement from one state to another triggered by an event.  
  Example: From [Checkout Info] to [Overview] after clicking "Continue"

### Exploratory Testing Terms

- **Charter**: A mission statement defining what to explore and why.
- **Session**: A dedicated, uninterrupted block of time spent exploring the system.
- **Time-box**: The fixed duration of a session, usually 60–90 minutes.
- **Test Ideas**: Guiding thoughts or areas to explore without a fixed script.
- **Debrief**: A structured reflection after the session to review findings and plan improvements.

### Core HTTP Terminology

- **Method**: The type of request sent to the server (e.g., GET, POST, DELETE...).
- **Endpoint**: The URL to which the request is sent.
- **Resource**: The targeted data or element that the request operates on.
- **Header**: Additional information sent with the request or response.
- **Body**: The data payload sent with the request (mainly in POST and PUT).
- **Status Code**: A numeric code indicating the result of the request.
- **Idempotent**: A property of methods where repeating the same request has no additional effect.
- **Safe**: A property of methods that do not modify resources (e.g., GET).

### Ch-5 – Test Management
- Test Plan: describes what to test, how to test, who tests, and when.
- Entry Criteria: conditions that must be met before testing begins.
- % Test Progress = (Executed TC ÷ Planned TC) × 100
- Test Control: comparing actual progress with plan, taking corrective actions.

# Day15 - Mobile Testing Terms

## DPI (Dots Per Inch)  
A measure of screen density that defines how many pixels fit into one inch of screen space.  
It affects how UI elements are displayed on different devices.

---

## Logcat  
A command-line tool in Android that collects and displays system logs,  
including app messages, errors, and stack traces.  
It is essential for debugging mobile applications.

---

## adb (Android Debug Bridge)  
A versatile command-line tool that lets you communicate with an Android device.  
It is used for installing apps, running shell commands, collecting logs, and testing.

---

## ANR (Application Not Responding)  
A system error in Android that occurs when an app becomes unresponsive  
to user input for a certain period, usually triggering a pop-up dialog.

---

## Accessibility Scanner  
An Android tool that analyzes your app’s UI and provides suggestions to improve accessibility,  
such as better contrast, larger touch targets, or content descriptions.
