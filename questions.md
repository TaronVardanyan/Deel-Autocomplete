<h1 align="left">1. What is the difference between <b>Component</b> and <b>PureComponent</b>? Give
an example where it might break my app.</h1>

<p>
Both components <b>Component</b> and <b>PureComponent</b> you can use to create reusable UI components. They have some similarities, but also differ in terms of their behavior and performance optimization.
The major difference between React.<b>PureComponent</b> and React.Component is <b>PureComponent</b> does a shallow comparison on state change.

Now, regarding a scenario where using <b>PureComponent</b> might break your app, it's important to note that <b>PureComponent</b> relies on shallow comparisons to determine if a component should update. This means that if you mutate the props or state objects directly, the shallow comparison may fail, leading to unexpected behavior.

// Incorrect usage that can break the app
<code>this.state.data.push(newItem)</code>;

You should go for React.<b>PureComponent</b> when you can satisfy any of the below conditions.

1. <b>State/Props should be an immutable object</b>
2. <b>You should call forceUpdate when data changes</b>
3. <b>State/Props should not have a hierarchy</b>


<b>Component</b> and <b>PureComponent</b> have one difference
<b>PureComponent</b> is exactly the same as <b>Component</b> except that it handles the <b>shouldComponentUpdate</b> method for you.

When props or state changes, <b>PureComponent</b> will do a shallow comparison on both props and state. <b>Component</b> on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever <b>ShouldComponentUpdate</b> is called.
</p>

<br>

<h1 align="left">2. <b>Context</b> + <b>ShouldComponentUpdate</b> might be dangerous. Why is that?</h1>

<p>
<b>Context</b> serves as a means of communication between components nested deeply within the component tree. For instance, a top-level component establishes a theme, and any component within the tree may or may not be interested in accessing this information.

In contrast, <b>ShouldComponentUpdate</b> optimizes the rendering process by bypassing re-rendering of a portion of the component tree, including its children, if there are no meaningful changes in the component's props or state, as far as the component can determine. However, this optimization can unintentionally hinder the propagation of <b>Context</b>.

Here are a few reasons why the combination of <b>Context</b> and <b>ShouldComponentUpdate</b> can be considered risky:

1. (Maintenance Challenges) - Combining Context with shouldComponentUpdate can increase the complexity of understanding and maintaining component behavior. It becomes harder to reason about how changes in Context may impact the decision-making process of shouldComponentUpdate. This can lead to subtle bugs and make it more difficult to maintain and modify the application over time.
2. (Context Change) - Context can provide a way to pass data down the component tree without explicitly passing props through each intermediate component. If a component relies on Context, it may not receive updates when the context value changes. As a result, the component's shouldComponentUpdate may incorrectly determine that there are no meaningful changes, leading to incorrect rendering and potential bugs.
3. (Unintended Side Effects) - Context updates can affect multiple components in the component tree. When a component uses shouldComponentUpdate to optimize rendering, it may inadvertently block updates from propagating through the context. This can cause unexpected behavior and inconsistencies in the application's state and UI.
</p>

<br>

<h1 align="left">3. Describe 3 ways to pass information from a component to its PARENT</h1>
 
<p>
   When you want to pass information from a component to its parent in React, there are several approaches you can take. Here are three common ways to achieve this:
   <br>
   <br>
   <br>
   1. Callback Functions.
      <i>
         One of the most popular way to pass information from a component to its parent in React is by using callback functions. In this approach, the parent component provides a callback function as a prop to the child component. The child component can invoke the callback function and pass the relevant information as an argument. The parent component receives the data through the callback function and can handle it accordingly. This enables communication between the child and parent components, allowing data to be passed back to the parent.
      </i>
      <br>
      <br>
      2. Context API.
      <i>
         Another approach to passing information from a component to its parent is by utilizing the Context API in React. With the Context API, the parent component creates a context and provides a value to it. The child component can consume the context and access the provided value using the useContext hook. This allows the child component to share data directly with its parent, bypassing intermediate components if necessary.
         Context is realy helpful, whit it's simplicity.Some times it's a best option to share info between components in small and medium projects.
      </i>
      <br>
      <br>
      3. State Management.
      <i>
         If the application requires more advanced state management, using state management libraries like Redux or MobX can be beneficial. These libraries provide a centralized store where components can dispatch actions to update the state. The parent component can define the store and pass it to the child component as props. The child component can dispatch actions to update the store, and the parent component can listen to these changes and respond accordingly. This approach facilitates passing information from the child component to its parent while synchronizing the state across components.
         I am a big fan of Recoil and the atomic pattern that it's use, Recoil was created by Meta platform. It's lighter than Redux and Mobx. But it's for small projects. we cannot use it on big projects. On medium or big projects I prefer use Mobx and MST.
      </i>
      <br>
   </p>
  <br>

  <h1 align="left">4. Give 2 ways to prevent components from re-rendering.</h1>

  <p>
     There is 2 cases regarding what kind of components we wanna use Class? or Functional?
     <br>
      <br>
     1. In the first scenario, when utilizing Class components as mentioned in questions 1 and 2, we can opt for PureComponent. However, if the component instance extends from React.Component, then we should ensure that our shouldComponentUpdate lifecycle method is implemented correctly.
<br>
 <br>
     2. The second approach, suitable when avoiding the use of Class components, involves utilizing the React.memo() higher-order component (HOC). This HOC selectively re-renders    the component wrapped within it, only when there are detected changes in the State or Props.
  </p>

  <h1 align="left">5. What is a fragment and why do we need it? Give an example where it might break my app.</h1>

  <p>
     Fragments are syntax hack that allow us to add multiple elements to a React component without wrapping them in an extra DOM node. Sometimes developing a component we need to wrap it in some block structure, because React components cannot return a multiply JSX blocks.
     Thats why React.Fragment can be really helpful. It's helping us to not get inside of "nesting hell", when there is no need to write a unused div node just as a wrapper of other jsx logic.
  <br>
  <br>
     There is two ways of use Fragments.
  <br>
  <br>
     1. React.Fragment JSX node , which also giving us two pass key property when we wanna use it inside of list structure.
     <br>
     2. Short hand sintax with empty tag brackets.
     <br>
     <br>
     It can break the app, when we are using some third party libs. There can be chance when that lib can ask a ReactNode to pass as a prop , and by mistake developer can pass a component which returns React.Fragment. That case can be harmful for app.
     Also there is a case which I mentioned earlier with passing a key to short hand sintax of Fragment.
     And the simple case that Fragments are not visible in DOM tree, thats why we cannot give some css styles to it ((.
  </p>

  <br>

  <h1 align="left">6. Give 3 examples of the HOC pattern.</h1>

  <p>
    The most popular 3 HOC's that developers using are
    <br>
    1. connect HOC from react-redux package<br>
    2. withRouter HOC from react-router-dom package<br>
    3. styled HOC's from UI libs such as Material UI or Antd<br>
  </p>
  <br>

  <h1 align="left">7. What's the difference in handling exceptions in promises, callbacks and async…await?</h1>

  <p>
     1. The Promises
  </p>

  <p>
     Promises are the classic way to handle async operations , thay use the .then() and .catch() methods to handle resolved values and rejected errors respectively. When an error occurs within a promise chain, it can be caught using the .catch() method at any point in the chain.
     If an error is not explicitly caught within the promise chain, it will be treated as an unhandled promise rejection, and the error will be logged to the console.
  </p>
  <code>
     asyncAction()
     .then(res => {
        // handle resolved value
     })
     .catch(err => {
        // handle error
     });
  </code>

  <p>
     2. Callbacks
  </p>

  <p>
     Using Callbacks to handle error capturing is the most popular technic in Node.js. Callback functions traditionally follow an error-first callback pattern where the first parameter of the callback represents an error (if any), and subsequent parameters contain the result.
     The error can be checked within the callback function and appropriate actions can be taken.
  </p>
  <code>
     asyncAction((err, res) => {
        if (err) {
           // handle error
        } else {
           // handle result
        }
     });
  </code>
  <br>

  <p>
     3. async/await with Try/Catch blocks
  </p>

  <p>
     Error handling in async/await using try-catch blocks, where potential errors can be caught within the try block and handled in the corresponding catch block
  </p>
  <code>
     async function asyncAction() {
        try {
           const result = await asyncFunction();
           // handle result
        } catch (error) {
           // handle error
        }
     }
  </code>

  <p>Prefer to use 3 solution with async/await )))</p>
  <br>

  <h1 align="left">8. How many arguments does setState take and why is it async</h1>

  <p>
   The main reason that setState works async is that as a developer we can have a multiply states in one component, and when user will interract with one of them other states should be able to changed also.
   If setState was working in synchronized way then major part of client interface features will wait untill the last operation will be completed.
   In other hand our client will be stuck, and unfortunatly we will lose his attention, because in some cases loading can take really long time or completeness of one operation will be realted to another opertaion which not even started just because of the order of it in Execution Context is not came.
  </p>

  <p>
    setState has 2 arguments
  </p>

  <p>
     1. newState
     <br>
     Represents the updated state values that you want to set in the component. It can be an object containing one or more key-value pairs representing the state changes.
  </p>

  <p>
     2. callback
     <br>
     optional function that will be executed after the state has been successfully updated. It can be used to perform additional tasks or trigger side effects that rely on the updated state.
  </p>

  <h1 align="left">9. List the steps needed to migrate a Class to Function Component.</h1>

  <p>
     1. Check component's lifecycle methods and state. Identify any lifecycle methods and replace the logic from inside of them, as well as any local state (this.state) that is need to be replaced with useState hook.
  </p>
  <br>
  <p>
     2. Remove class identification. Use Arrow function or Function Declaration with the same name that class component was using.
  </p>
  <br>
  <p>
     3. replace render method with return statement.
  </p>
  <br>
  <p>
     4. Change event handlers to function expressions
  </p>
  <br>
  <p>
     5. Configure useEffect to be able replace lifecycle methods
  </p>
  <br>


