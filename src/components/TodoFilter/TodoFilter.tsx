import { FC, memo } from 'react';

interface Props {
  onQuery: (str: string) => void;
  onStatus: (str: string) => void;
  onDeleteQuery: () => void;
  searchQuery: string;
  todoStatus: string;
}

export const TodoFilter: FC<Props> = memo(({
  onQuery,
  onStatus,
  onDeleteQuery,
  searchQuery,
  todoStatus,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          value={todoStatus}
          onChange={(event) => onStatus(event.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={searchQuery}
        onChange={(event) => onQuery(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {searchQuery && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={onDeleteQuery}
          />
        </span>
      )}
    </p>
  </form>
));