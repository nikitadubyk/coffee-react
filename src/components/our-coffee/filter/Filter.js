import { Component } from 'react';

import './Filter.scss';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filter: '',
        };
    }

    onChange = e => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onChangeTerm(term);
    };

    render() {
        return (
            <div className='price__form'>
                <div className='price__form-search'>
                    <div className='price__form-subtitle'>Lookiing for</div>
                    <input
                        type='text'
                        className='price__form-input'
                        placeholder='start typing here...'
                        onChange={this.onChange}
                    />
                </div>
                <div className='price__form-filter'>
                    <div className='price__form-subtitle'>Or filter</div>
                    <div className='price__form-filter__btn'>
                        <button
                            className='price__form-button active'
                            onClick={() => this.props.onChangeFilter('Brazil')}
                        >
                            Brazil
                        </button>
                        <button
                            className='price__form-button'
                            onClick={() => this.props.onChangeFilter('Kenya')}
                        >
                            Kenya
                        </button>
                        <button
                            className='price__form-button'
                            onClick={() =>
                                this.props.onChangeFilter('Columbia')
                            }
                        >
                            Columbia
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;
