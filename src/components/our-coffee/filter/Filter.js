import './Filter.scss';

const Filter = () => {
    return (
        <div className='price__form'>
            <div className='price__form-search'>
                <div className='price__form-subtitle'>Lookiing for</div>
                <input
                    type='text'
                    className='price__form-input'
                    placeholder='start typing here...'
                />
            </div>
            <div className='price__form-filter'>
                <div className='price__form-subtitle'>Or filter</div>
                <div className='price__form-filter__btn'>
                    <button className='price__form-button active'>
                        Brazil
                    </button>
                    <button className='price__form-button'>Kenya</button>
                    <button className='price__form-button'>Columbia</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
