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

<br/>

<h1 align="left">2. <b>Context</b> + <b>ShouldComponentUpdate</b> might be dangerous. Why is that?</h1>

<p>
<b>Context</b> serves as a means of communication between components nested deeply within the component tree. For instance, a top-level component establishes a theme, and any component within the tree may or may not be interested in accessing this information.

In contrast, <b>ShouldComponentUpdate</b> optimizes the rendering process by bypassing re-rendering of a portion of the component tree, including its children, if there are no meaningful changes in the component's props or state, as far as the component can determine. However, this optimization can unintentionally hinder the propagation of <b>Context</b>.

Here are a few reasons why the combination of <b>Context</b> and <b>ShouldComponentUpdate</b> can be considered risky:

1. Maintenance Challenges: Combining Context with shouldComponentUpdate can increase the complexity of understanding and maintaining component behavior. It becomes harder to reason about how changes in Context may impact the decision-making process of shouldComponentUpdate. This can lead to subtle bugs and make it more difficult to maintain and modify the application over time.
2. Context Changes: Context can provide a way to pass data down the component tree without explicitly passing props through each intermediate component. If a component relies on Context, it may not receive updates when the context value changes. As a result, the component's shouldComponentUpdate may incorrectly determine that there are no meaningful changes, leading to incorrect rendering and potential bugs.
3. Unintended Side Effects: Context updates can affect multiple components in the component tree. When a component uses shouldComponentUpdate to optimize rendering, it may inadvertently block updates from propagating through the context. This can cause unexpected behavior and inconsistencies in the application's state and UI.
</p>

<br/>
