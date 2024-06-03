import { ProgressBar } from "../progress-bar/component";

export const Header = ({ header }) => {
  return (
    <header>
      <ProgressBar />
      {header}
    </header>
  );
};
