import React from 'react';
import { IssueListProps } from '../types';

const IssueList: React.FC<IssueListProps> = ({ issues, onUpdate, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <th scope="row">{issue.id}</th>
              <td>{issue.title}</td>
              <td>{issue.description}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => onUpdate(issue)}>Update</button>
                {' '}
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(issue?.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssueList;