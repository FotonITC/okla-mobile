import React from 'react';
import {FlatList} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {fetchDishes} from '../store/actions/dishes';
import DishItem from '../components/DishItem';

import {selectDishes} from '../store/actions/dish.selectors';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const {navigation, dishes} = this.props;

        return (
            <FlatList
                data={dishes}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <DishItem
                    title={item.label}
                    description={item.description}
                    image={item.images.length ? item.images[0] : 'https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png'}
                    onSelect={() => navigation.navigate('Details')}
                />}
            />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    dishes: selectDishes,
});

export default connect(mapStateToProps, {fetchDishes})(HomeScreen);
