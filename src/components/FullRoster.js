import React from 'react'

export default class FullRoster extends React.Component {

    constructor(props) {
        super();
        this.state = {
            computerGames: []
        };
    }

    componentDidMount() {

        fetch('http://localhost:8080/games')
            .then(response => response.json())
            .then(data => this.setState({
                computerGames: data
            }));
    }

    render() {
        return(
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.state.computerGames.map(function(p, index) {
                    return(
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
}