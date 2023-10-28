
import React, { Component } from 'react';
import './styles1.css';

export default class Koot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            wordCount: 0, // Add a word count property
        };
    }

    handleInput = (e) => {
        const newText = e.target.value;
        this.setState({
            text: newText,
            wordCount: this.countWords(newText), // Calculate and set word count
        });
    }

    countWords = (text) => {
        const words = text.split(' ').filter(word => word.trim() !== ''); // Split text by spaces and filter out empty words
        return words.length;
    }

    render() {
        return (
            <div>
                <div className='box'>
                    <h1 className='head'>Responsive Paragraph Word Counter</h1>
                    <form>
                        <textarea onChange={this.handleInput}></textarea>
                    </form>
                    <p className='wc'>Word Count: {this.state.wordCount}</p> {/* Display word count */}
                </div>
                
            </div>
        );
    }
}
