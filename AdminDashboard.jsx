// Generic table that renders columns/rows and delegates actual sorting to
// the caller (sortBy/sortOrder/onSort), since most listings here are
// sorted server-side by the API.
export default function SortableTable({ columns, rows, sortBy, sortOrder, onSort, emptyMessage = 'Nothing to show yet.' }) {
  return (
    <div className="table-wrap">
      <table className="ledger">
        <thead>
          <tr>
            {columns.map((col) => {
              const isSorted = sortBy === col.key;
              return (
                <th
                  key={col.key}
                  className={col.sortable ? 'sortable' : ''}
                  onClick={col.sortable ? () => onSort(col.key) : undefined}
                >
                  {col.label}
                  {col.sortable && isSorted && (
                    <span className="sort-arrow">{sortOrder === 'asc' ? '▲' : '▼'}</span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="empty-state">
                {emptyMessage}
              </td>
            </tr>
          )}
          {rows.map((row, i) => (
            <tr key={row.id ?? i}>
              {columns.map((col) => (
                <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
