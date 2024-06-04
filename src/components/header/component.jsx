import { ProgressBar } from "../progress-bar/component";
import { ThemeToggler } from "../theme-toggler/component";

export const Header = ({ header }) => {
  return (
    <header>
      <ProgressBar />
      <ThemeToggler/>
      {header}
    </header>
  );
};
