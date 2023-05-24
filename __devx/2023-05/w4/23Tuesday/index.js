// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

// ReactDOM.render(<p>Hi, my name is Chris</p>, document.getElementById("root"));
const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
);

console.log(page);

ReactDOM.render(page, document.getElementById("root"));
