import React from "react";
import "./styles.css";

export default class HPCharacters extends React.Component {
    constructor() {
        super();
        this.state = { characters: [], searchString: "" };
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://hp-api.herokuapp.com/api/characters");
            const characters = await res.json();
            this.setState({ characters });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        let filteredCharacters = this.state.characters;
        if (this.state.searchString && this.state.characters.length > 0) {
            filteredCharacters = this.state.characters.filter(character =>
                character.name.includes(this.state.searchString)
            );
        }

        return (
            <div className="container">
                <h1>Harry Potter Characters</h1>
                <form>
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="search for a character"
                        value={this.state.searchString}
                        onChange={e => this.setState({ searchString: e.target.value })}
                    />
                </form>
                <ul id="charactersList">
                    {filteredCharacters.map((character, index) => (
                        <li className="character" key={index}>
                            <h2>{character.name}</h2>
                            <p>House: {character.house}</p>
                            <img src={character.image} alt="HP Character" />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
