import { useState } from 'react';

import './Filter.scss';

const Filter = props => {
    const [term, setTerm] = useState('');
    const [buttonData, setButtonData] = useState([
        { name: 'Brazil', id: 0 },
        { name: 'Kenya', id: 1 },
        { name: 'Columbia', id: 2 },
    ]);

    const onChange = e => {
        const term = e.target.value;
        setTerm(term);
        props.onChangeTerm(term);
    };

    const buttonsRef = [];

    const setRef = ref => {
        buttonsRef.push(ref);
    };

    const onActiveButton = id => {
        buttonsRef.forEach(btn => btn.classList.remove('active'));
        buttonsRef[id].classList.add('active');
        buttonsRef[id].focus();
    };

    return (
        <div className='price__form'>
            <div className='price__form-search'>
                <div className='price__form-subtitle'>Lookiing for</div>
                <input
                    type='text'
                    className='price__form-input'
                    placeholder='start typing here...'
                    onChange={onChange}
                />
            </div>
            <div className='price__form-filter'>
                <div className='price__form-subtitle'>Or filter</div>
                <div className='price__form-filter__btn'>
                    {buttonData.map(({ name, id }) => (
                        <button
                            className={'price__form-button'}
                            onClick={() => {
                                props.onChangeFilter(name);
                                onActiveButton(id);
                            }}
                            ref={setRef}
                            key={id}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
