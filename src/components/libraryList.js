import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library.item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
        );
    }
}

const MapStateToProps = state => ({ libraries: state.libraries });
export default connect(MapStateToProps)(LibraryList);
