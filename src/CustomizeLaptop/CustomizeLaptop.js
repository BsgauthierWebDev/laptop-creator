import React, {Component} from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem';

class CustomizeLaptop extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
    return (
        <FeatureItem
        itemHash={itemHash}
        feature={feature}
        item={item}
        {...this.props}
        />
    );
    });
    return (
        <fieldset className='feature' key={featureHash}>
            <legend className='feature__name'>
                <h3>{feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
    });
    return (
        <form className='main__form'>
            <h3>Customize Your Laptop</h3>
            {features}
        </form>
    );
}
}

export default CustomizeLaptop;