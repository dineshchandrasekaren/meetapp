import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.mainHeader}>
      <nav className={classes.nav}>
        <h1 className={classes.logo}>MeetApp</h1>
        <ul className={classes.links}>
          <li>All MeetUps</li>
          <li>Add Meetup</li>
          <li>Add Favourite</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
