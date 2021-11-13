import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import reducer from "../store/reducers";
import { Show } from "../types";

const STYLE: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  rowGap: '24px',
  justifyContent: 'space-around',
};
const SHOW_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export default function Shows(): JSX.Element {
  const shows = useSelector<ReturnType<typeof reducer>, Show[]>(
    (state) => state.shows.shows
  );
  return (
    <div style={STYLE}>
      {shows.map((show) => (
        <a
          href={show._links.self.href}
          key={show.id}
          rel="NOREFERRER NOOPENER"
          style={SHOW_STYLE}
          target="_blank"
        >
          {show.image && <img alt={show.name} src={show.image.medium} />}
          <span>{show.name}</span>
          <span>{show.premiered}</span>
        </a>
      ))}
    </div>
  );
}
