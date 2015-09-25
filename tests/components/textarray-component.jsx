import React from 'react';

export default class TableComponent extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                        <td>21</td>
                        <td>Paris</td>
                        <td>
                          <a>Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Test2</td>
                        <td>22</td>
                        <td>New-York</td>
                        <td>
                          <a>Edit</a>
                          <a>Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
