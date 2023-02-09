const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;

  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-container">
    <h1 className="header">Social Buttons</h1>
    <div className="button-card">
      <Button className="like-btn" text="Like" />
      <Button className="comment-btn" text="Comment" />
      <Button className="share-btn" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
