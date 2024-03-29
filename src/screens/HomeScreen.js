import React from 'react';
import {FlatList, View, TextInput, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {fetchDishes, initSelectedDish, refreshDishes, updateProp} from '../store/actions/dishes';
import DishItem from '../components/DishItem';
import i18n from '../services/i18n';

import {selectDishes, selectPage, selectLoading, selectSearch} from '../store/actions/dish.selectors';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {fetchDishes, navigation} = this.props;
        fetchDishes();

        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{padding: 10, marginRight: 10}}
                    onPress={() => navigation.navigate('Create')}
                >
                    <Text style={{color: '#007AFF'}}>{i18n.t('add')}</Text>
                </TouchableOpacity>
            ),
        });

    }

    render() {
        const {navigation, dishes, initSelectedDish, page, loading, search} = this.props;

        return (
            <View>
                <View style={styles.searchInputContainer}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={text => this.props.updateProp({prop: 'search', value: text})}
                        value={search}
                    />
                    <Button
                        title={i18n.t('search')}
                        onPress={() => this.props.refreshDishes(search)}
                    />
                </View>
                <FlatList
                    data={dishes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <DishItem
                        title={item.label}
                        description={item.description}
                        image={item.images.length ? item.images[0] : 'https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png'}
                        onSelect={() => {
                            initSelectedDish();
                            navigation.navigate('Details', {dishId: item.id});
                        }}
                    />}
                    refreshing={loading}
                    onRefresh={() => this.props.refreshDishes()}
                    onEndReached={() => this.props.fetchDishes(page, search)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchInputContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    searchInput: {
        paddingHorizontal: 10,
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
    },
});

const mapStateToProps = createStructuredSelector({
    dishes: selectDishes,
    page: selectPage,
    loading: selectLoading,
    search: selectSearch,
});

export default connect(mapStateToProps, {fetchDishes, initSelectedDish, refreshDishes, updateProp})(HomeScreen);
