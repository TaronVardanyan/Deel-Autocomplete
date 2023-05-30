import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to the Auto-Complete React Project! 👋</h1>
      <p>This project demonstrates an auto-complete component using the GitHub Users Search API.</p>
      <p>
        Start typing in the input field below to see auto-complete suggestions based on GitHub
        usernames.
      </p>
    </div>
  );
};

export default Welcome;
