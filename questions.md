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

When props or state changes, <b>PureComponent</b> will do a shallow comparison on both props and state. <b>Component</b> on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
</p>
